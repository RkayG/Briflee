# Briflee

**The private workspace you give a client when they hire you.**

Briflee is a B2B SaaS application that gives service providers (freelancers, agencies, developers) a polished, professional client-facing portal to manage ongoing work. It eliminates the need for scattered communication across WhatsApp, Google Drive, and email by providing a single place to see what's happening, review work, give feedback, and approve deliverables.

## 📖 Project Documentation
- **[Product Requirements Document (PRD)](./prd.md)**: Contains the full MVP scope, core features, database schema, and product principles.

## 🏗️ Workspace Structure

This project is set up as a monorepo containing the following packages:

- `packages/frontend`: The React + Vite client-facing web application.
  - **UI Framework:** [Untitled UI](https://www.untitledui.com/) (Tailwind CSS based)
  - **Tooling:** Vite, React, TypeScript
  - **Package Manager:** `pnpm`

*(Additional packages like the backend API will be added here as the project grows.)*

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- `pnpm` (v9+)

### Frontend Setup

To run the frontend locally:

```bash
# Navigate to the frontend package
cd packages/frontend

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

## 🧠 Philosophy
The product does not try to replace a professional's internal toolstack (GitHub, Linear, Figma, Slack). Instead, it acts as the presentation layer:

```text
                 YOUR WORK
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
     GitHub        Figma       Linear
        │            │            │
        └────────────┼────────────┘
                     ↓
                  BRIFLEE
                     ↓
                  CLIENT
```

*The workspace your clients actually want to use.*
