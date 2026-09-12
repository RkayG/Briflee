# Briflee (Client Portal SaaS)

This is the monorepo for Briflee, a client-facing workspace application for service providers. 

For product requirements, business logic, and product positioning, please refer to the [Product Requirements Document (PRD)](./prd.md).

## 🏗️ Architecture

This repository uses a monorepo structure.

### `packages/frontend`
The web client application.
*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Styling & UI:** Tailwind CSS, Untitled UI
*   **Language:** TypeScript
*   **Package Manager:** `pnpm`

*(Backend services and shared packages will be added to the `packages/` directory as the architecture evolves).*

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- `pnpm` (v9+)

### Installation

1. Clone the repository and navigate to the root directory.
2. Install dependencies for the frontend workspace:

```bash
cd packages/frontend
pnpm install
```

### Development

To start the local development server for the frontend:

```bash
cd packages/frontend
pnpm dev
```
The application will be available at `http://localhost:5173` (or the port specified in your terminal).

## 🛠️ Scripts

Available scripts in `packages/frontend/package.json`:
- `pnpm dev`: Starts the Vite development server.
- `pnpm build`: Compiles TypeScript and builds the app for production.
- `pnpm preview`: Previews the production build locally.
