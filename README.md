# ThetaSwap UI Automation Test

## Description
This repository contains Playwright UI tests for the ThetaSwap swap page.

## Covered Scenarios
1. Search input should not break UI when space is entered
2. Swap page should display main UI elements
3. Swap button should be disabled without amount

## Project Structure
- tests/search-space.spec.js — Playwright tests

## Setup
npm install  
npx playwright install

## Run Tests
npx playwright test tests/search-space.spec.js

## Notes
These tests validate UI stability, input handling, and basic swap functionality.

## Tech Stack
- Playwright
- JavaScript
- Node.js
