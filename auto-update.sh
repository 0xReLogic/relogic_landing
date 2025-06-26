#!/bin/bash

echo "🚀 ReLogic Auto-Update Script"
echo "================================"

cd "d:/produk freelance/Mini Project Full Stack/relogic-landing"

echo "📊 Checking for changes..."
git status

echo ""
echo "📝 Adding all changes..."
git add .

echo ""
read -p "💬 Enter commit message (or press Enter for default): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="🔄 Auto-update: Enhanced features and improvements"
fi

echo ""
echo "💾 Committing changes..."
git commit -m "$commit_msg"

echo ""
echo "🌐 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Successfully updated ReLogic repository!"
echo "🔗 Check: https://github.com/0xReLogic/relogic-landing"
echo "🌐 Live Demo: https://0xrelogic.github.io/relogic-landing"
echo ""