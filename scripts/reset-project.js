#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Remove node_modules
const nodeModulesPath = path.join(__dirname, "../node_modules");
if (fs.existsSync(nodeModulesPath)) {
  console.log("Removing node_modules...");
  fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  console.log("✓ node_modules removed");
}

// Remove Expo cache
const expoCachePath = path.join(__dirname, "../.expo");
if (fs.existsSync(expoCachePath)) {
  console.log("Removing .expo cache...");
  fs.rmSync(expoCachePath, { recursive: true, force: true });
  console.log("✓ .expo cache removed");
}

console.log("\n✓ Project reset complete!");
console.log('Run "npm install" to reinstall dependencies.');
