---
trigger: model_decision
description: Markdown Style Guide
---

# Markdown Style Guide

This guide helps in writing consistent and properly formatted Markdown files.

## General Rules

1. Use only one H1 heading (`#`) per document
2. Use consistent indentation (2 or 4 spaces, choose one style)
3. Keep line length under 100 characters
4. Add blank lines before and after headings and lists
5. Use consistent list formatting (no mixed bullet points)

## Headings

```markdown
# Chapter (H1) - only one per document

## Section (H2)

### Subsection (H3)
```

## Lists

For unordered lists, use a hyphen (`-`) with one space:

```markdown
- First item
- Second item
    - Nested item (2 spaces indentation)
```

For ordered lists:

```markdown
1. First item
2. Second item
    1. Nested item (4 spaces indentation)
```

## Code Blocks

Use three backticks (```) with language specification:

````markdown
```javascript
function hello() {
    console.log("Hello, world!");
}
```
````

## Inline Code

Use single backticks for inline code, without spaces inside the backticks:

```markdown
Use `console.log()` for debugging.
```

## Links

```markdown
[Visible text](https://example.com)
```

## Images

```markdown
![Alt text](path/to/image.jpg)
```

## Bold and Italic

```markdown
**Bold** and _italic_ text usage.
```

## Tables

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Horizontal Rules

Use three or more hyphens, asterisks, or underscores:

```markdown
---
```

## Common Mistakes to Avoid

1. **No spaces in code spans**

    - Wrong: `` ` console.log() ` ``
    - Correct: `` `console.log()` ``
    - Also applies to other code elements like `` `$app/state` `` (no spaces
      inside backticks)

2. **Keep lines under 100 characters**

    - Break long lines for better readability
    - Example:

        ```text
        // Too long:
        With Svelte 5's new props system, `createEventDispatcher` is no longer needed.
        Use `$props()` with callback functions instead.

        // Better:
        With Svelte 5's new props system,
        `createEventDispatcher` is no longer needed.
        Use `$props()` with callback functions instead.
        ```

3. **No multiple H1 headings**

    - Use only one `#` per document

4. **Consistent indentation**

    - Choose either 2 or 4 spaces and be consistent

5. **No bare URLs**

    - Always use the `[text](URL)` format

6. **No trailing spaces**
    - These can cause unexpected behavior

## Tools

- **Markdown Lint**: For automatic Markdown validation
- **Prettier**: For automatic Markdown formatting
- **Visual Studio Code**: With appropriate extensions for real-time feedback

## Example Configuration

`.markdownlint.json`:

```json
{
    "default": true,
    "MD013": {
        "line_length": 100,
        "code_blocks": false
    },
    "MD025": {
        "level": 1,
        "front_matter_title": ""
    },
    "MD033": {
        "allowed_elements": ["details", "summary"]
    },
    "MD041": false
}
```

### JSON Configuration Files

When including JSON in Markdown files:

1. **Format for readability**

    - Use proper indentation (2 spaces per level)
    - Put each key-value pair on its own line for objects with more than one
      property
    - Keep arrays on a single line if they're short, otherwise put each item on
      its own line

2. **Example of well-formatted JSON**

    ```json
    {
        "key1": "value1",
        "key2": {
            "nestedKey": "nestedValue"
        },
        "key3": ["item1", "item2", "item3"]
    }
    ```

3. **For configuration files** (like `.markdownlint.json`):
    - Include all relevant configuration options
    - Add comments using the JSONC format (if supported by your editor)
    - Keep the structure consistent with the tool's documentation

Following these guidelines will help maintain consistent and well-formatted
Markdown files in your project.
