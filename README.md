# Crew Hackathon Workspace

A modern, production-ready full-stack monorepo workspace engineered for fast development, scalability, and smooth user experiences. 

This repository pairs a high-performance **Next.js 16** frontend with a modular, type-safe **Node.js & Express TypeScript** backend.

---

## 🏗️ Project Architecture

```
crew-hackathon/
├── frontend/             # Next.js 16 + React 19 App Router + Tailwind CSS + GSAP + Lenis
│   ├── src/
│   │   └── app/          # App router pages, layouts, and route handlers
│   ├── public/           # Static assets
│   └── package.json
│
├── backend/              # Node.js + Express + TypeScript REST API
│   ├── src/
│   │   ├── config/       # Environment variables & configuration
│   │   ├── controllers/  # Request handlers & logic coordination
│   │   ├── middlewares/  # Error handlers, rate limiting & auth
│   │   ├── routes/       # API route declarations
│   │   ├── services/     # Business logic layer
│   │   ├── types/        # TypeScript interfaces & type definitions
│   │   ├── utils/        # Reusable helper functions & response formatters
│   │   ├── app.ts        # Express app configuration & middleware setup
│   │   └── server.ts     # HTTP server entry point
│   ├── .env.example      # Example environment configuration
│   └── package.json
│
├── package.json          # Root workspace orchestration scripts
└── README.md
```

---

## ⚡ Tech Stack

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [GSAP](https://greensock.com/gsap/) & `@gsap/react`
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) with `tsx` for lightning-fast hot reloading
- **Validation:** [Zod](https://zod.dev/)
- **Security & Logging:** [Helmet](https://helmetjs.github.io/), [CORS](https://github.com/expressjs/cors), and [Morgan](https://github.com/expressjs/morgan)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (v20+ recommended)
- **npm**: `v9.0.0` or higher

---

### Installation

To install all dependencies across the root, frontend, and backend in one shot:

```bash
npm run install:all
```

Or install them individually:

```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend && npm install

# Backend dependencies
cd ../backend && npm install
```

---

### Environment Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update `.env` with your desired configuration (default `PORT=5000` and `CLIENT_URL=http://localhost:3000`).

---

### Running the Development Environment

You can spin up both frontend and backend concurrently from the root directory:

```bash
npm run dev
```

This will run:
- **Frontend** on [http://localhost:3000](http://localhost:3000)
- **Backend API** on [http://localhost:5000](http://localhost:5000)

---

## 🛠️ Root Workspace Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs frontend and backend concurrently with color-coded logs |
| `npm run dev:frontend` | Starts only the Next.js frontend development server |
| `npm run dev:backend` | Starts only the Express backend development server |
| `npm run build` | Builds both backend (TypeScript compile) and frontend (Next.js production build) |
| `npm run build:frontend` | Builds the Next.js production bundle |
| `npm run build:backend` | Compiles the backend TypeScript code into `dist/` |
| `npm run lint:frontend` | Runs ESLint checks on frontend code |
| `npm run install:all` | Installs dependencies in root, frontend, and backend |

---

## 📖 Subproject Documentation

For deep dives into each part of the codebase, check out their dedicated guides:
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

---

## 🤝 Contributing & Guidelines

- Keep all business logic decoupled within service layers in the backend.
- Keep frontend components modular, reusable, and accessible.
- Maintain type safety across both applications by declaring strict TypeScript interfaces.
