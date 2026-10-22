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

## Replacing images

**Hero workspace photo.** `src/data/profile.js` → `heroImage`. It currently
points at a free Unsplash photo (laptop with a code editor on a desk, by
Christopher Gower, Unsplash License) with a credit link under it. To use your
own photo, save it as e.g. `src/assets/workspace.jpg`, then:

```js
import workspace from '../assets/workspace.jpg'
// ...
heroImage: { src: workspace, alt: 'Describe the photo', credit: null },
```

If the image ever fails to load, a labelled "Workspace photo placeholder" box
is shown instead of a broken image.

**Profile portrait (optional).** Also in `profile.js`: import your photo and set
`portrait: portrait`. It appears as a small framed portrait on the hero photo.
Leave it `null` to hide it.

**Project screenshots.** Put the image in `src/assets/projects/`, import it at
the top of `src/data/projects.js`, and set the project's `image`:

```js
image: { src: myShot, alt: 'What the screenshot shows', caption: 'Dashboard' },
```

Recommended size: 1440×900 (16:10) JPG or WebP, under ~200 KB. The cards crop
to 16:10 from the top.

Current screenshots and where they came from:

| Project | Image | Source |
|---|---|---|
| NGO Assistance Platform | `ngo-assistance-platform.jpg` | Sign-in screen of the real app, built from the repository's `frontend/` and captured in a browser |
| MedChain (medical records) | `medchain-landing.jpg` | Landing page from the repository's `frontend/index.html`, captured in a browser |
| Amazon Nova assistant | none | Shows a diagram of the request flow described in the repository README (labelled "Diagram", not a screenshot). Add a screenshot of the app answering a question to replace it. |

Dashboards for the NGO and MedChain apps need a running backend and accounts,
so they were not captured. Screenshots of those screens would make strong
replacements.

## Contact form configuration

The form has validation (required fields, email format, 10-character minimum
message), error messages tied to each field, focus moved to the first invalid
field, and a live status region for screen readers.

How it sends depends on one optional environment variable:

| `VITE_FORM_ENDPOINT` | Behaviour |
|---|---|
| not set (default) | Opens the visitor's email app with a pre-filled email to meghanadc20@gmail.com. The page says the email app should open; it never claims the message was sent. |
| set | POSTs JSON `{ name, email, subject, message, _replyto, _subject }` to that URL. Shows "Thanks, your message was sent" only on a 2xx response, otherwise an error with the email address. |

To set up real delivery with Formspree (free tier):

1. Create a form at https://formspree.io and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. Locally: copy `.env.example` to `.env` and fill in `VITE_FORM_ENDPOINT`.
3. On the host: add `VITE_FORM_ENDPOINT` as an environment variable and redeploy (Vite reads it at build time).

Any service that accepts a JSON POST and returns 2xx on success will work.

## Deploying

### Netlify (recommended, you already use it for the NGO app)

1. Push this folder to a GitHub repository.
2. Netlify → Add new site → Import an existing project → pick the repo.
3. Build command `npm run build`, publish directory `dist` (already in `netlify.toml`).
4. Optional: Site configuration → Environment variables → add `VITE_FORM_ENDPOINT`.

Or drag and drop the `dist/` folder onto https://app.netlify.com/drop after `npm run build`.

### Vercel

Import the repo; Vercel detects Vite automatically (build `npm run build`, output `dist`).

### GitHub Pages

Set `base: '/<repo-name>/'` in `vite.config.js` (or `'/'` for a
`meghanadc20.github.io` repo), build, and publish `dist/` with the
`actions/deploy-pages` workflow.

After deploying, consider adding `og:image` and `og:url` tags in `index.html`
with your final domain so link previews show an image.

## Content notes

- Everything shown comes from the brief or from the repositories. There are no
  ratings, percentages, dates, employers, awards or metrics.
- Project stacks were checked against each repository:
  - NGO platform: React + Vite frontend; FastAPI, SQLAlchemy, PostgreSQL (with GeoAlchemy2 for locations) backend. Supabase is listed as given in the brief; the code reads a generic `DATABASE_URL`, so Supabase is presumably the hosted Postgres.
  - MedChain: Solidity contract (Ganache), Ethers.js and MetaMask, Node.js + Express API, MongoDB with Mongoose, Supabase Storage for encrypted files, plain HTML/CSS/JS frontend.
  - Nova assistant: Amazon Nova 2 Lite through Amazon Bedrock, Python Flask backend with boto3, HTML/CSS/JS frontend.
