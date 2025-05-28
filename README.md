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

- ⚡ **SvelteKit** - Modern web framework
- 🎨 **Tailwind CSS** - For styling
- 🐘 **PostgreSQL** - Containerized database
- 🛠️ **Dev Container** - Pre-configured VS Code environment
- 🔌 **Multiple Runtimes** - nvm, Deno, and Bun support
- 🧪 **Testing** - Vitest setup included
- 🎯 **Code Quality** - ESLint & Prettier configured

## 🔄 Creating Additional Projects

To create another project, simply run:

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
- and more...

## 📧 Contact

Chris Engelhard - [chris@digi4care.nl](mailto:chris@digi4care.nl)

Project Link: [https://github.com/digi4care/sveltekit-postgres-devcontainer](https://github.com/digi4care/sveltekit-postgres-devcontainer)

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/remote/containers)
- All the amazing open-source projects that make this possible
