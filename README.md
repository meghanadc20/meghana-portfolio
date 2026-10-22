# Meghana D C — Portfolio

A single-page personal portfolio built with React 18, Vite 6 and CSS Modules.
Dark navy and lavender theme, DM Serif Display headings, Inter body text and
JetBrains Mono labels (all self-hosted through `@fontsource`, so no external
font requests).

## Quick start

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## Folder structure

```
portfolio/
├── index.html                 Page title, description, social-sharing meta, favicon
├── public/favicon.svg
├── netlify.toml               Build settings for Netlify
├── .env.example               Optional contact-form endpoint
└── src/
    ├── main.jsx               Font imports and app mount
    ├── App.jsx                Section order
    ├── styles/global.css      Colour tokens, buttons, tags, reveal animation, reduced-motion rules
    ├── hooks/
    │   ├── useReveal.js       Fade-up when a block scrolls into view
    │   └── useActiveSection.js  Highlights the current nav link
    ├── data/                  All content lives here, edit these to update the site
    │   ├── profile.js         Name, links, hero photo, optional portrait, nav links
    │   ├── skills.js          Skill groups
    │   ├── projects.js        Project cards (descriptions, stacks, links, screenshots)
    │   ├── journey.js         Experience & Learning Journey entries
    │   └── services.js        "What I Enjoy Building" cards
    ├── assets/projects/       Project screenshots
    └── components/            One component + one .module.css per piece
        Navbar, Hero, SectionHeading, About, Skills, SkillGroup, Projects,
        ProjectCard, ProjectVisual, Journey, TimelineEntry, Services,
        Education, Contact, ContactForm, SocialLinks, BrandIcons, Reveal, Footer
```




  - NGO platform: React + Vite frontend; FastAPI, SQLAlchemy, PostgreSQL (with GeoAlchemy2 for locations) backend. Supabase is listed as given in the brief; the code reads a generic `DATABASE_URL`, so Supabase is presumably the hosted Postgres.
  - MedChain: Solidity contract (Ganache), Ethers.js and MetaMask, Node.js + Express API, MongoDB with Mongoose, Supabase Storage for encrypted files, plain HTML/CSS/JS frontend.
  - Nova assistant: Amazon Nova 2 Lite through Amazon Bedrock, Python Flask backend with boto3, HTML/CSS/JS frontend.
