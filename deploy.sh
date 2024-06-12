#!/bin/bash

set -e

echo "Installing dependencies..."
npm install

echo "Running the application..."
node index.js &
APP_PID=$!

echo "Testing the application..."
sleep 5
curl -f http://localhost:3000

echo "Killing the application process..."
kill $APP_PID

echo "CI/CD process completed successfully!"
