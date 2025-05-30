import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://runed.dev";
const DOCS_URL = `${BASE_URL}/docs`;
const OUTPUT_DIR = path.join(process.cwd(), ".windsurf/rules");

// Maak de uitvoermap aan als die nog niet bestaat
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function fetchPage(url) {
    try {
        console.log(`Fetching: ${url}`);
        const response = await axios.get(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error.message);
        return null;
    }
}

function createMarkdownFile(title, links) {
    // Formatteer de bestandsnaam (kleine letters, spaties vervangen met -)
    const filename = `${title}.md`;
    const filepath = path.join(OUTPUT_DIR, filename);

    // Maak de inhoud van het markdown-bestand met YAML frontmatter
    let content = `---\ntrigger: model_decision\ndescription: ${title
        .replace("runed-", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}\n---\n\n`;
    content += `# ${title
        .replace("runed-", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}\n\n`;

    // Voeg links toe en verwijder dubbele links
    const uniqueLinks = [];
    const seen = new Set();

    links.forEach((link) => {
        const fullUrl = link.href.startsWith("http")
            ? link.href
            : `${BASE_URL}${link.href}`;
        const key = `${link.text}-${fullUrl}`;

        if (!seen.has(key)) {
            seen.add(key);
            uniqueLinks.push({
                text: link.text,
                href: fullUrl
            });
        }
    });

    // Sorteer links op tekst
    uniqueLinks.sort((a, b) => a.text.localeCompare(b.text));

    // Voeg gesorteerde links toe aan de inhoud
    uniqueLinks.forEach((link) => {
        content += `- [${link.text}](${link.href})\n`;
    });

    // Schrijf het bestand
    fs.writeFileSync(filepath, content);
    console.log(`Created: ${filename} (${uniqueLinks.length} links)`);
}

async function scrapeRunedDocs() {
    console.log("Fetching Runed documentation from:", DOCS_URL);
    const html = await fetchPage(DOCS_URL);
    if (!html) {
        console.error("Failed to fetch documentation");
        return;
    }

    const $ = cheerio.load(html);

    // Zoek naar de sidebar menu groepen
    const menuGroups = $('div[data-sidebar="group"]');
    console.log(`Found ${menuGroups.length} menu groups`);

    if (menuGroups.length === 0) {
        console.error("No menu groups found in the sidebar");
        return;
    }

    // Verwerk elke menugroep, maar sla de eerste 2 over
    menuGroups.each((groupIndex, group) => {
        const $group = $(group);

        // Haal de groepsnaam op uit het element met data-sidebar="group-label"
        const $titleElement = $group
            .find('[data-sidebar="group-label"]')
            .first();
        const groupTitle = $titleElement
            .contents()
            .filter(function () {
                return this.nodeType === 3; // Alleen tekstnodes
            })
            .text()
            .trim();

        if (!groupTitle) {
            console.log(`Skipping group ${groupIndex + 1} (no title found)`);
            return;
        }

        console.log(`Processing group: ${groupTitle}`);

        // Maak een schone bestandsnaam van de titel
        const cleanTitle = groupTitle
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

        // Zoek naar alle links in de menulijst
        const menuItems = [];
        $group.find('a[data-sidebar="menu-button"]').each((i, link) => {
            const $link = $(link);
            let href = $link.attr("href");
            const text = $link.text().trim();

            if (href && text) {
                // Zorg ervoor dat de URL absoluut is
                if (!href.startsWith("http")) {
                    href = href.startsWith("/")
                        ? `${BASE_URL}${href}`
                        : `${BASE_URL}/docs/${href}`;
                }

                menuItems.push({
                    text,
                    href
                });
            }
        });

        // Maak een bestand voor elke groep met items
        if (menuItems.length > 0) {
            createMarkdownFile(`runed-${cleanTitle}`, menuItems);
        } else {
            console.log(`No menu items found in group: ${groupTitle}`);
        }
    });

    console.log("\nDocumentation scraping completed!");
    console.log(`Check the '${OUTPUT_DIR}' directory for the generated files.`);
}

// Start het proces
scrapeRunedDocs().catch(console.error);
