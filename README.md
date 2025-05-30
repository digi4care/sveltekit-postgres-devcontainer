# 🚀 SvelteKit + PostgreSQL Dev Container Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

1. **Clone this repository**:
   ```bash
   git clone https://github.com/digi4care/sveltekit-postgres-devcontainer.git
   cd sveltekit-postgres-devcontainer
   ```

2. **Create a new project** (this will create it in the parent directory):
   ```bash
   ./create-svelte-project.sh my-new-project
   ```

3. **Open the new project in VS Code**:
   ```bash
   cd ../my-new-project
   code .
   ```

4. **Open in Dev Container**:
   - Press `F1`
   - Select "Remote-Containers: Reopen in Container"
   - Wait for the container to build (first time may take a few minutes)

## ✨ Features

- ⚡ **SvelteKit** - Modern web framework (optional, install via Makefile)
- 🎨 **Tailwind CSS** - Optional CSS framework (install via Makefile)
- 🐘 **PostgreSQL** - Containerized database
- 🛠️ **Dev Container** - Pre-configured VS Code environment
- 🔌 **Multiple Runtimes** - nvm, Deno, and Bun support
- 🧪 **Testing** - Optional Vitest setup (install via Makefile)
- 🎯 **Code Quality** - ESLint & Prettier configured

## 🛠️ Makefile Commands

The project includes a powerful Makefile to help you manage your SvelteKit project. Here are the most useful commands:

### Project Creation
```bash
# Create a new Svelte project (interactive)
make create projectname

# Create a minimal TypeScript project
make create-minimal projectname

# Create a demo project with TypeScript
make create-demo projectname

# Create a library project with TypeScript
make create-library projectname
```

### Add-ons & Features
```bash
# Add Tailwind CSS
make add-tailwind

# Add Vitest for testing
make add-vitest

# Add Drizzle ORM
make add-drizzle

# Add ESLint
make add-eslint

# Add Storybook
make add-storybook

# Add Playwright for end-to-end testing
make add-playwright

# Add mdsvex for Markdown support
make add-mdsvex
```

### Development
```bash
# Install dependencies
make setup

# Start development server
make dev

# Build for production
make build

# Preview production build
make preview
```

### Database
```bash
# Start database container
make db-up

# Stop database container
make db-down

# Run database migrations
make db-migrate
```

Run `make help` to see all available commands.

## 🔄 Creating Additional Projects

To create another project, you can either use the Makefile (recommended) or the create script:

### Using Makefile (recommended)
```bash
# Create a new project with interactive setup
make create projectname

# Or create a specific type of project
make create-minimal projectname   # Minimal setup
make create-demo projectname      # Demo template
make create-library projectname   # Library template
```

### Using the create script
```bash
# From the template directory
./create-svelte-project.sh another-project
```

## 📦 Included Tools

- Node.js (via nvm)
- Deno
- Bun
- PostgreSQL client
- Git
- cURL
- jq
- GitHub CLI (authenticate with `gh auth login`)
- and more...

## 📧 Contact

Chris Engelhard - [chris@digi4care.nl](mailto:chris@digi4care.nl)

Project Link: [https://github.com/digi4care/sveltekit-postgres-devcontainer](https://github.com/digi4care/sveltekit-postgres-devcontainer)

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/remote/containers)
- All the amazing open-source projects that make this possible
