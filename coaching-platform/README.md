# Coaching Institute Platform (MVP)

Modern coaching institute website + student portal + admin panel.

## Features included (MVP scaffold)
- **Marketing website**: Home, About, Courses (+ detail), Faculty, Results, Blog (+ post), Contact
- **Student portal (demo auth)**: Login, Dashboard, Lectures/Tests/Materials placeholders
- **Admin panel (demo auth)**: Login, Dashboard, Leads (real data), and placeholders for Courses/Content/Tests/Students/Blog
- **Database**: SQLite (local dev) + Prisma schema + migrations
- **APIs**: `/api/courses`, `/api/leads`, `/api/auth/login`, `/api/auth/logout`

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma + SQLite (dev)

## Prerequisites
- Node.js 20+ (recommended)

## Setup (Windows / PowerShell)
```bash
cd "C:\Users\PC-08\Desktop\New folder\coaching-platform"
npm install
npm run db:migrate
npx prisma generate
npm run db:seed
npm run dev
```

Then open `http://localhost:3000`.

## Using the app
- **Contact form**: `Contact` → submit inquiry → saved into DB
- **View leads**: `Admin` → login (demo) → `Leads` shows latest inquiries
- **Courses page**: loads from database (seeded courses)

## Notes
- Authentication is **demo-only** (cookie session via `/api/auth/login`). Replace with real auth + RBAC next.
- SQLite database file is `dev.db` (created automatically).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
