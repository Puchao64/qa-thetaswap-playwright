# 🧪 ThetaSwap UI Automation (Playwright)

[![Playwright Cross-Platform Tests](https://github.com/Puchao64/qa-thetaswap-playwright/actions/workflows/main.yml/badge.svg)](https://github.com/Puchao64/qa-thetaswap-playwright/actions/workflows/main.yml)

UI automation tests for the live [ThetaSwap](https://thetaswap.org/swap) swap page using Playwright.

---

## 🚀 Project Overview

This project checks that the swap page renders its key elements and that the token search input stays stable when it receives unexpected input.  
It is a small suite focused on UI stability and cross-platform CI execution.

---

## 🧠 QA Approach

- check that key UI elements of the swap page render correctly
- verify that the token search input does not break the UI when it receives a trailing space

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
- every push
- pull requests

---

## 📂 Project Structure

```
tests/
└── search-space.spec.js
```

---

## ✅ Test Coverage

Input handling:
- token search input with a trailing space does not break the swap page

UI Rendering:
- swap page loads at the correct URL
- title, token search input and token selector are visible

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
