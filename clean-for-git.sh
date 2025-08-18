#!/bin/bash

# Clean project for Git upload
echo "🧹 Cleaning project for Git upload..."

# Remove build files
echo "Removing build files..."
rm -rf .next
rm -rf out
rm -rf build

# Remove dependency files (will be reinstalled)
echo "Removing node_modules..."
rm -rf node_modules

# Remove TypeScript build info
echo "Removing TypeScript build files..."
rm -f tsconfig.tsbuildinfo
rm -f *.tsbuildinfo

# Remove system files
echo "Removing system files..."
find . -name ".DS_Store" -delete
find . -name "Thumbs.db" -delete

# Remove log files
echo "Removing log files..."
find . -name "*.log" -delete
find . -name "npm-debug.log*" -delete
find . -name "yarn-debug.log*" -delete
find . -name "yarn-error.log*" -delete

# Remove temporary files
echo "Removing temporary files..."
find . -name "*.tmp" -delete
find . -name "*.swp" -delete
find . -name "*.swo" -delete

echo "✅ Project cleaned and ready for Git upload!"
echo ""
echo "📁 Files that will be uploaded:"
echo "   - Source code (app/, components/, lib/, types/)"
echo "   - Configuration files (package.json, next.config.js, etc.)"
echo "   - Static assets (public/)"
echo "   - Documentation (README.md, DEPLOYMENT.md)"
echo ""
echo "🚫 Files that will be ignored (.gitignore):"
echo "   - node_modules/ (dependencies)"
echo "   - .next/ (build output)"
echo "   - *.tsbuildinfo (TypeScript cache)"
echo "   - .DS_Store (system files)"
echo ""
echo "🌐 Target domain: https://www.adventureai.jp"
echo "🎯 Ready to upload to GitHub and deploy to Vercel!"
