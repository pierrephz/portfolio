# pierrephilouze.com

Static portfolio site (plain HTML/CSS/JS, no build step), hosted on Vercel.

- Pushing to `main` deploys to production; other branches get preview deployments.
- `/photography` is proxied to the separate `photos-portfolio-murex` Vercel project (see `vercel.json`).
- Colours live as custom properties at the top of `style/style.css`; the dark theme re-declares those same tokens under `prefers-color-scheme: dark` at the bottom of that file.
- Analytics: Vercel Web Analytics and Google Analytics (`G-75M14D9F3R`), loaded in each page's `<head>`.
