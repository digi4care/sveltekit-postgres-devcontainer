import fs from "node:fs";
import path from "node:path";
// import { fileURLToPath } from "node:url";
import axios from "axios";
import * as cheerio from "cheerio";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const BASE_URL = "https://tailwindcss.com";
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
    // Formatteer de bestandsnaam
    const filename = `tailwind-${title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}.md`;
    const filepath = path.join(OUTPUT_DIR, filename);

    // Maak de inhoud van het markdown-bestand met YAML frontmatter
    let content = `---\ntrigger: model_decision\ndescription: Tailwind ${title}\n---\n\n`;
    content += `# ${title}\n\n`;
    content += links.map((link) => `- [${link.text}](${link.href})`).join("\n");

    // Schrijf het bestand
    fs.writeFileSync(filepath, content);
    console.log(`Created: ${filename} (${links.length} links)`);
}

async function scrapeDocumentation() {
    console.log("Fetching Tailwind CSS documentation from:", DOCS_URL);
    const html = await fetchPage(DOCS_URL);
    if (!html) {
        console.error("Failed to fetch documentation");
        return;
    }

    const $ = cheerio.load(html);

    // Zoek naar alle navigatiesecties
    const navSections = $('nav div[class*="flex"]');
    console.log(`Found ${navSections.length} navigation sections`);

    // Loop door elke sectie
    navSections.each((i, section) => {
        const $section = $(section);
        const title = $section.find("h3").first().text().trim();

        if (!title) return; // Sla lege secties over

        const links = [];

        // Zoek alle links in deze sectie
        $section.find("a").each((j, link) => {
            const $link = $(link);
            const href = $link.attr("href");
            const text = $link.text().trim();

            if (href && text) {
                links.push({
                    text,
                    href: href.startsWith("http") ? href : `${BASE_URL}${href}`
                });
            }
        });

        if (links.length > 0) {
            createMarkdownFile(title, links);
        } else {
            console.log(`No links found in section: ${title}`);
        }
    });

    console.log("\nDocumentation scraping completed!");
    console.log(`Check the '${OUTPUT_DIR}' directory for the generated files.`);
}

// Start het proces
scrapeDocumentation().catch(console.error);
