# ThetaSwap UI Automation Test

## Description
This repository contains Playwright UI tests for the ThetaSwap swap page.

## Tech Stack
- Playwright
- JavaScript
- Node.js

## Covered Scenarios
1. Validate search input handling with edge case (space input)
2. Verify main swap page UI elements are rendered correctly


## Project Structure
- tests/ — contains Playwright test files
  - search-space.spec.js — UI tests for search input and swap behavior

## Setup
npm install  
npx playwright install

## Run Tests
npx playwright test tests/search-space.spec.js

## Notes
These tests validate UI stability, input handling, and main swap page elements.
