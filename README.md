# BookCart Playwright Automation Project

## Prerequisites

- Node.js (latest LTS version recommended)
- Playwright installed globally or via project dependencies
- Docker (if using containerized execution)

## Installation

1. Clone the repository:
    ```
    git clone <repo_url>
    cd bookcart-pw-ts-main
    ```
2. Install dependencies:
    ```
    npm install
    ```

## Running Tests

- Run all tests:

    ```
    npx playwright test
    ```

## Running in Docker

- Build and run the container:
    ```
    docker-compose up --build
    ```

## Project Structure

- `<span>tests/</span>` – Contains test scripts.
- `<span>pages/</span>` – Page Object Model (POM) classes.
- `<span>utils/</span>` – Helper functions.
- `<span>playwright.config.ts</span>` – Playwright configuration file.
- `<span>Dockerfile</span>` & `<span>docker-compose.yml</span>` – For containerized test execution.

## Additional Commands

- View test report:
    ```
    npx playwright show-report
    ```

## Notes

- Update test configurations in `<span>playwright.config.ts</span>` as needed.
- Use `<span>.env</span>` files if environment-specific configurations are required.

---

This is a minimal setup guide. Refer to Playwright documentation for more advanced configurations.

Book Cart app | Playwright &amp; TypeScript
