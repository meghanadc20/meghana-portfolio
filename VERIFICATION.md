# Verification results (12 Oct 2026)

Run against the production build (`npm run build` + `vite preview`) in headless Chromium.

| Check | Result |
|---|---|
| Production build | Passes. JS 189 KB (60 KB gzip), CSS 39 KB (14 KB gzip) |
| Console errors | None at 1440, 820, 390 and 320 px widths |
| Horizontal overflow | 0 px at all four widths |
| Nav links | All six scroll to their section (lands just below the sticky bar); active indicator follows |
| Mobile menu | Opens/closes, `aria-expanded` updates, Escape closes and returns focus, link tap closes and scrolls |
| Anchors | Every `#` link has a matching section |
| External links | All open in a new tab with `rel="noopener noreferrer"` |
| Link targets | GitHub profile, 3 repos, NGO live demo, LinkedIn, `mailto:meghanadc20@gmail.com` match the brief. Repos confirmed by cloning |
| Images | All have alt text; project screenshots lazy-load |
| Headings | One `h1`; each section has an `h2` |
| Keyboard | First Tab stop is "Skip to content"; visible lavender focus rings |
| Reduced motion | With `prefers-reduced-motion: reduce`, reveal content is visible immediately and transitions are disabled |
| Form, empty submit | 4 field errors shown, focus moves to Name |
| Form, bad input | Invalid email and short message errors shown |
| Form, no endpoint | Opens a `mailto:` with subject and body filled; status says the email app should open |
| Form, endpoint returns 200 | "Thanks, your message was sent" shown, fields cleared, JSON payload correct |
| Form, endpoint returns 500 | Error message with the email address shown; typed values kept |

Not checked from the build environment: the Unsplash hero photo and the
Netlify demo URL (that network blocked those hosts). Both are standard public
URLs; check them once in a normal browser after deploying.
