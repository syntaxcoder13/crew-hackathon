# Backend API Service

A scalable, type-safe REST API built with **Node.js**, **Express**, and **TypeScript**, configured with robust validation, logging, and security best practices.

---

## ✨ Features & Architecture

- **Clean Layered Architecture:** Separates routing, controllers, business services, middlewares, and data utilities.
- **Strict TypeScript & Validation:** Strict type declarations and schema validation with [Zod](https://zod.dev/).
- **Security Defaults:** Equipped with [Helmet](https://helmetjs.github.io/) headers and configurable [CORS](https://github.com/expressjs/cors).
- **Fast Developer Workflow:** Zero-build instant hot-reloading powered by `tsx watch`.
- **Standardized Error & Response Formatting:** Centralized error handling and predictable JSON envelopes.

---

## 📁 Directory Structure

```
backend/
├── src/
│   ├── config/             # Environment variables parsing & validation
│   ├── controllers/        # Request handlers & HTTP coordination
│   ├── middlewares/        # Global error handling, 404, request logging
│   ├── routes/             # Express route definitions
│   ├── services/           # Reusable business logic layer
│   ├── types/              # Interfaces, types, and API payloads
│   ├── utils/              # Utility helpers & response envelopes
│   ├── app.ts              # Express application factory & middleware stack
│   └── server.ts           # Server bootstrap & graceful shutdown listeners
├── .env.example            # Environment variable template
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts & dependencies
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `backend/` root:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `PORT` | `5000` | Port on which the API server listens |
| `NODE_ENV` | `development` | Runtime environment (`development`, `production`, `test`) |
| `CLIENT_URL` | `http://localhost:3000` | Allowed client origin for CORS requests |
| `API_PREFIX` | `/api/v1` | URL prefix for all versioned API endpoints |

---

### 3. Run Development Server

```bash
npm run dev
```

The API will be available at [http://localhost:5000](http://localhost:5000).

---

## 📡 API Endpoints

### Root Info
`GET /`
```json
{
  "name": "Crew Hackathon Backend API",
  "version": "1.0.0",
  "status": "active",
  "endpoints": {
    "health": "/api/v1/health"
  }
}
```

### Health Check
`GET /api/v1/health`
```json
{
  "success": true,
  "message": "Server is healthy",
  "timestamp": "2026-09-10T19:24:00.000Z",
  "uptime": 12.4
}
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts server with `tsx watch` for instant hot-reload |
| `npm run build` | Cleans `dist/` and compiles TypeScript to JavaScript |
| `npm run start` | Runs the compiled production code from `dist/server.js` |
| `npm run lint` | Runs TypeScript typecheck (`tsc --noEmit`) |
