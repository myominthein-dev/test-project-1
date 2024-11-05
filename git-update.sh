#!/bin/bash

# Set your development branch name here
DEV_BRANCH="dev-zarmani"

# Checkout the main branch and pull the latest changes
echo "Switching to the main branch..."
git checkout main
if [ $? -ne 0 ]; then
  echo "Error: Failed to checkout main."
  exit 1
fi

echo "Pulling latest changes from main..."
git pull origin main
if [ $? -ne 0 ]; then
  echo "Error: Failed to pull from main."
  exit 1
fi

# Checkout the development branch
echo "Switching to the development branch ($DEV_BRANCH)..."
git checkout $DEV_BRANCH
if [ $? -ne 0 ]; then
  echo "Error: Failed to checkout $DEV_BRANCH."
  exit 1
fi

# Merge main into the development branch
echo "Merging main into $DEV_BRANCH..."
git merge main
if [ $? -ne 0 ]; then
  echo "Error: Merge conflict or failure during merge."
  exit 1
fi

echo "Merge successful!"
