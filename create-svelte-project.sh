#!/bin/bash

# Check if project name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <project-name> [destination]"
    echo "Example: $0 my-svelte-app ../my-svelte-app"
    exit 1
fi

PROJECT_NAME=$1
DESTINATION=${2:-../$PROJECT_NAME}
TEMPLATE_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Check if destination exists
if [ -d "$DESTINATION" ]; then
    echo "Error: Destination directory '$DESTINATION' already exists."
    exit 1
fi

echo "Creating new Svelte project '$PROJECT_NAME' in '$DESTINATION'..."

# Create destination directory
mkdir -p "$DESTINATION"

# Copy all files except .git, node_modules, and other ignored files
rsync -av \
    --exclude='.git' \
    --exclude='node_modules' \
    --exclude='.svelte-kit' \
    --exclude='build' \
    --exclude='dist' \
    --exclude='.cache' \
    --exclude='.temp' \
    --exclude='.tmp' \
    --exclude='coverage' \
    --exclude='pgdata' \
    --exclude='*.local' \
    --exclude='.DS_Store' \
    --exclude='.vscode' \
    "$TEMPLATE_DIR"/. "$DESTINATION"

# Initialize new git repository
cd "$DESTINATION"
rm -rf .git

echo ""
echo "Project '$PROJECT_NAME' created successfully in '$DESTINATION'"
echo ""
echo "Next steps:"
echo "1. cd $(basename "$DESTINATION")"
echo "2. git init"
echo "3. npm install"
echo "4. Start developing!"
