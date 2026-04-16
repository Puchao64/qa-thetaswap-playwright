# 🧪 ThetaSwap UI Automation (Playwright)

[![CI](https://github.com/Puchao64/qa-thetaswap-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/Puchao64/qa-thetaswap-playwright/actions)

End-to-end UI automation tests for a token swap interface using Playwright.

---

## 🚀 Project Overview

This project validates core UI behavior of a swap interface: input handling, edge cases, and basic interaction logic.  
It reflects a QA approach focused on UI stability, incorrect user input, and consistent behavior of critical elements.

---

## 🧠 QA Approach

- validate user input (including edge cases like space-only input)
- ensure correct rendering of key UI elements
- verify stability under invalid input
- check basic interaction flow of the swap page

Scenarios are based on typical risks:
- incorrect or unexpected user input
- UI inconsistencies
- missing or broken elements

---

## 🛠 Tech Stack

- Playwright
- JavaScript
- Node.js
- GitHub Actions (CI)

---

## 🔄 Continuous Integration

Tests run automatically via GitHub Actions.

CI workflow:
- install dependencies
- install Playwright browsers
- run UI tests

Platforms:
- Linux
- Windows
- macOS

Triggers:
- push to main
- pull requests

---

## 📂 Project Structure

```
tests/
└── search-space.spec.js
```

---

## ✅ Test Coverage

Input Validation:
- space-only input handling
- invalid user input validation

UI Rendering:
- swap page loads correctly
- key UI elements are visible and stable

---

## ▶️ How to Run Tests

```
npm install
npx playwright install
npx playwright test tests/search-space.spec.js
```

---

## 🎯 Purpose

- UI automation with Playwright
- edge case and invalid input handling
- basic QA test design
- clean project structure
- multi-platform CI execution
