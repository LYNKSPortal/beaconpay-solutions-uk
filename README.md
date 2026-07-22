# Beaconpay Solutions

A production-ready UK payroll services website built with [Next.js](https://nextjs.org), React and [Tailwind CSS](https://tailwindcss.com).

## Overview

Beaconpay Solutions provides professional PAYE, CIS, umbrella, contractor and outsourced payroll services for businesses and recruitment agencies across the UK. This site includes:

- Public service, industry, resource and legal pages
- Reusable UI components and structured content
- Accessible, responsive design
- SEO metadata, sitemap, robots.txt and structured data
- Cookie consent banner with preference management
- Contact, call-back and careers forms with server-side validation
- Central business configuration in `lib/config.ts`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment variables

Copy `.env.example` to `.env.local` and configure real values before going live:

```bash
cp .env.example .env.local
```

- `EMAIL_FROM` — sender address for form submissions
- `EMAIL_TO` — recipient address for form submissions
- `SENDGRID_API_KEY` or `RESEND_API_KEY` — email provider API key (optional)

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project structure

```
app/
  components/      # Reusable components (Header, Footer, forms, etc.)
  api/             # Server-side API routes for form submissions
  ...pages         # Route folders for each page
lib/
  config.ts        # Business details, navigation, legal placeholders
  data.ts          # Service, industry, FAQ and article content
  email.ts         # Email helper stub for form submissions
public/            # Static assets
```

## Important notes before launch

1. Review and update `lib/config.ts` with the confirmed registered company name, number, registered office and ICO/VAT details.
2. Have a UK data protection professional review the Privacy Policy.
3. Have a solicitor review the Terms and Conditions, Cookie Policy and legal pages.
4. Connect the form API routes to a real email provider using environment variables.
5. Replace placeholder testimonials and article content with approved content when available.

## Deployment

This is a standard Next.js application. Deploy to [Vercel](https://vercel.com), or any platform that supports Next.js server-side API routes.
