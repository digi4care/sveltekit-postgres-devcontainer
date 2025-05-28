# 🚀 SvelteKit + PostgreSQL Dev Container Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

A powerful development environment for SvelteKit applications with PostgreSQL, equipped with all modern tools and configurations for productive development.

## ✨ Features

- ⚡ **SvelteKit** - The modern web framework for lightning-fast web apps
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🛠️ **Dev Container** - Ready-to-code development environment with VS Code
- 🐘 **PostgreSQL** - Powerful relational database in a container
- 🛡️ **TypeScript** - Type safety and better developer experience
- 🎯 **ESLint & Prettier** - Integrated code quality and formatting
- 🧪 **Vitest** - Fast unit testing
- 🚀 **GitHub Actions** - CI/CD workflows included

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [VS Code](https://code.visualstudio.com/)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension

### Create a New Project

1. **Copy the template** to a new directory:

   ```bash
   # Navigate to your projects directory
   cd /path/to/projects
   
   # Run the create script
   /path/to/template/create-svelte-project.sh my-new-project
   ```

2. **Open the project in VS Code**
   ```bash
   cd my-new-project
   code .
   ```

3. **Open in Dev Container**
   - Press `F1` and select "Remote-Containers: Reopen in Container"
   - Wait for the container to start and all extensions to be installed

   > **Note:** If extensions are not automatically installed, you can install them manually by:
   > 1. Clicking on the Extensions icon in the Activity Bar (or press `Ctrl+Shift+X`)
   > 2. Clicking on the "..." menu in the Extensions view
   > 3. Selecting "Show Recommended Extensions"
   > 4. Clicking the cloud download icon in the top-right corner to install all recommended extensions

4. **Install dependencies** (if not done automatically)
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🛠️ Project Structure

```
.
├── .devcontainer/       # Dev container configuration
├── .github/             # GitHub workflows
├── src/
│   ├── lib/           # Shared components and utilities
│   ├── routes/         # SvelteKit routes
│   └── app.d.ts        # TypeScript type definitions
├── static/             # Static files
├── tests/              # Test files
├── .eslintrc.cjs       # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .gitignore          # Git ignore file
├── docker-compose.yml   # Docker compose configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 🧪 Testing

```bash
# Set up the test database (one-time setup)
npm run test:setup

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage
npm run test:coverage
```

## 🚀 Production Build

```bash
# Build the application for production
npm run build

# Preview the production build locally
npm run preview
```

## 🔌 Database Configuration

The PostgreSQL database is pre-configured in the dev container. Use the following settings:

- **Host**: `localhost` or `postgres` (from within the container)
- **Port**: `5432`
- **Database**: `app`
- **User**: `postgres`
- **Password**: `postgres`

## 🤝 Contributing

Contributions are welcome! Feel free to submit an issue or pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Chris Engelhard - [chris@digi4care.nl](mailto:chris@digi4care.nl)

Project Link: [https://github.com/digi4care/sveltekit-postgres-devcontainer](https://github.com/digi4care/sveltekit-postgres-devcontainer)

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/remote/containers)
- All the amazing open-source projects that make this possible
