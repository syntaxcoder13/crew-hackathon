# Frontend Application

A modern, responsive, and animated user interface built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, **GSAP**, and **Lenis**.

---

## ✨ Features & Highlights

- **Next.js App Router:** Server and client components with nested layouts and optimized routing.
- **Tailwind CSS v4:** Modern styling with zero runtime overhead.
- **GSAP & `@gsap/react`:** Cinematic, fluid micro-interactions and scroll animations.
- **Lenis Smooth Scrolling:** Ultra-smooth, performant momentum scrolling experience.
- **TypeScript First:** Strict type safety across components, props, and API client interactions.

---

## 📁 Directory Structure

```
frontend/
├── public/                 # Static assets (images, icons, fonts)
├── src/
│   └── app/                # Next.js App Router
│       ├── layout.tsx      # Root application layout with fonts & providers
│       ├── page.tsx        # Homepage entry
│       └── globals.css     # Global CSS and Tailwind directives
├── package.json            # Frontend dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🎬 Animation & Smooth Scroll Guide

### Using Lenis for Smooth Scroll
You can initialize Lenis in your root layout or a dedicated smooth scroll wrapper provider:

```tsx
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

### Using GSAP in React Components
Use the `@gsap/react` hook `useGSAP` for clean lifecycle management and automatic cleanup:

```tsx
'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <h1 className="hero-title text-4xl font-bold">Welcome</h1>
    </div>
  );
}
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Launches the Next.js development server on port 3000 |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Checks code formatting and linter rules with ESLint |
