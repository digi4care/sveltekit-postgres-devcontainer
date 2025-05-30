---
trigger: model_decision
description: Upgrading your Tailwind CSS projects from v3 to v4.
---

# Tailwind CSS Upgrade Guide

For the most up-to-date and comprehensive upgrade guide, please refer to the
official Tailwind CSS documentation:

🔗
[Official Tailwind CSS Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)

This document provides detailed information about all the changes, new features,
and migration steps when upgrading from Tailwind CSS v3 to v4.

## Removed and Renamed Utilities in v4

### Removed Deprecated Utilities

Tailwind CSS v4 has removed several utilities that were deprecated in v3. Here
are the changes:

| Deprecated              | Replacement                                       |
| ----------------------- | ------------------------------------------------- |
| `bg-opacity-*`          | Use opacity modifiers like `bg-black/50`          |
| `text-opacity-*`        | Use opacity modifiers like `text-black/50`        |
| `border-opacity-*`      | Use opacity modifiers like `border-black/50`      |
| `divide-opacity-*`      | Use opacity modifiers like `divide-black/50`      |
| `ring-opacity-*`        | Use opacity modifiers like `ring-black/50`        |
| `placeholder-opacity-*` | Use opacity modifiers like `placeholder-black/50` |
| `flex-shrink-*`         | `shrink-*`                                        |
| `flex-grow-*`           | `grow-*`                                          |
| `overflow-ellipsis`     | `text-ellipsis`                                   |
| `decoration-slice`      | `box-decoration-slice`                            |
| `decoration-clone`      | `box-decoration-clone`                            |

### Renamed Utilities

The following utilities have been renamed in v4 for better consistency:

| v3                 | v4                 |
| ------------------ | ------------------ |
| `shadow-sm`        | `shadow-xs`        |
| `shadow`           | `shadow-sm`        |
| `drop-shadow-sm`   | `drop-shadow-xs`   |
| `drop-shadow`      | `drop-shadow-sm`   |
| `blur-sm`          | `blur-xs`          |
| `blur`             | `blur-sm`          |
| `backdrop-blur-sm` | `backdrop-blur-xs` |
| `backdrop-blur`    | `backdrop-blur-sm` |
| `rounded-sm`       | `rounded-xs`       |
| `rounded`          | `rounded-sm`       |
| `outline-none`     | `outline-hidden`   |
| `ring`             | `ring-3`           |

## Svelte-Specific Notes

When working with Svelte, pay special attention to the sections about:

- Using `@apply` in component styles
- CSS Modules and scoped styles
- Theme variables in component styles
- Build tool configurations

Always check the
[official documentation](https://tailwindcss.com/docs/upgrade-guide) for the
latest updates and best practices.
