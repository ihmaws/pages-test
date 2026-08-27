#!/usr/bin/env node
// Example CLI — dummy entry point for a GitHub Pages test repo.

const command = process.argv[2] || "help";

switch (command) {
  case "init":
    console.log("Scaffolding a new project...");
    break;
  case "preview":
    console.log("Starting preview server on http://localhost:4000 ...");
    break;
  case "publish":
    console.log("Publishing site to target...");
    break;
  default:
    console.log("Usage: example <init|preview|publish>");
}
