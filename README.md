# Kartavya Arora — Portfolio

A dark, cinematic portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## Features

- 🖱 Magnetic custom cursor with lagging ring
- 🎞 Grain noise overlay for depth
- 🃏 3D tilt hero card (mouse-tracked perspective)
- 🌊 Framer Motion scroll-reveal on every section
- ⚡ Scroll-aware glassmorphism Navbar
- 🎨 Acid green + cyan on near-black palette
- 🔤 Syne + DM Mono typography
- 📱 Fully responsive

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customization

All content lives in a **single file**: `lib/data.ts`

Update:
- `personal` — name, email, phone, LinkedIn, GitHub URLs
- `experiences` — job history, bullets, stack
- `skillGroups` — skill categories and tags
- `projects` — project details, stats, links

## Project Structure

```
├── app/
│   ├── globals.css       # CSS variables, cursor, grain, animations
│   ├── layout.tsx        # Root layout with fonts + Cursor
│   └── page.tsx          # Page composer
├── components/
│   ├── ui/
│   │   ├── Cursor.tsx    # Magnetic cursor (client component)
│   │   ├── Reveal.tsx    # Scroll-reveal wrapper
│   │   └── SectionHeader.tsx
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── lib/
    └── data.ts           # ← All your content lives here
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```
