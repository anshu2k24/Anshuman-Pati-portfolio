# AGENTS.md

## Commands
- `npm run dev` — Turbopack dev server (flag already in the script).
- `npm run build` / `npm start`.
- `npm run lint` — **only lints `.js`**. `eslint.config.mjs` sets no `files`, so flat
  config defaults to `**/*.js`; all `.jsx` files are skipped and
  `npx eslint "app/**/*.jsx"` fails with "all files are ignored". Verify JSX edits with
  `npm run build`, not lint.
- No test or typecheck script. `jsconfig.json` declares an unused `@/*` alias; every import
  in the repo is relative.

## Structure
- `app/page.js` ("use client") composes the home sections in order: Hero → TechStack →
  Projects → Hackathons → Socials → Contact → Footer. Add/edit a home section here.
- `app/components/navigation.jsx` (lowercase, unlike its PascalCase siblings) exports
  `Navigation` and is rendered per page — not by `layout.js`. Each page owns
  `isMenuOpen` state and must pass both props.
- Section ids are `#home`, `#techstack`, `#projects`, `#hackathons`, `#contact`, derived in
  `navigation.jsx` by `item.toLowerCase().replace(" ", "")` (first space only). Renaming a
  nav item or section id silently breaks the anchor.
- Project cards are a hardcoded array in `app/components/Projects.jsx`. "View Details" points
  at `/projects/${createSlug(project.name)}`, so a detail page is a manually created
  directory: renaming a project's `name` breaks the link unless `app/projects/<slug>/` moves
  with it (`"Glider 🏅"` → `glider`, `"Rock, Paper, and Scissor"` → `rock-paper-and-scissor`).
- `app/components/Hackathons.jsx` has its own array and uses `"#"` as a "don't render this
  link" sentinel (`{x.githubLink !== "#" && ...}`); `certificate: true` gates both the 📜
  badge and the certificate link. Don't substitute `null`.
- Icons are hand-rolled SVG in `app/components/Icons.js`. `@heroicons/react`, `lucide-react`,
  and `@splinetool/react-spline` are in `package.json` but imported nowhere.
- Styling is Tailwind v4 utilities only — there is no `tailwind.config.*`; `globals.css` is
  just `@import "tailwindcss";`. Animation keyframes behind `animate-float`,
  `animate-orbital-glow`, etc. live in a `<style jsx>` block inside `Hero.jsx`, not in CSS.

## Forms / backend (requires env)
Only server code: `app/api/contact/route.js`, `app/api/suggestion/route.js`.
Gitignored env, no `.env.example`: `MONGODB_URI` (`app/lib/dbConnect.js`, throws if
missing), plus `from_EMAIL_ADDRESS`, `from_EMAIL_PASSWORD`, `to_PORTFOLIO_EMAIL_ADDRESS`
(Gmail SMTP via nodemailer, `app/services/emailService.js`). Without them both forms 400.
- Contact rejects an exact name+email+msg duplicate with 409, and any repeat from the same
  email within 20 minutes with 429 ("wait N minutes") — a second identical test submit always
  fails. Suggestion rejects exact duplicates with 409.
- Emails are fire-and-forget (`.catch()` only), so SMTP failures never reach the response.
- `app/services/emailService.js` and `app/model/SuggestionModel.js` are CommonJS;
  `app/model/ContactMeModel.js` and everything else are ESM. The routes import both styles, so
  don't convert only one side.

## Known pre-existing issues
- `app/projects/{glider,nerobot,pcfr,studyai}/page.js` render `<Navigation />` with no props,
  so `setIsMenuOpen` is undefined and the mobile hamburger throws. Copy the pattern from
  `rock-paper-and-scissor/page.js`.
- `app/components/dump.jsx` is a legacy, mostly commented-out copy of `Hero`; nothing imports
  it — leave it that way.
- Unused assets: `app/components/me2.jpeg`, `me21.jpg` (live pic is `me.jpg`, imported in
  `Hero.jsx`) and all of `app/images/hackathon_certificates/` (Hackathons links to Google Drive).
- `unitech/page.js` passes `className` to `Navigation`, which ignores extra props.
- `opencode/skills/{Design-check,portfolio-ui}/SKILL.md` exist but are empty — there is no
  stored UI/design guidance in this repo.

## Git / deploy
- Commit straight to the current branch (`portfolio-redesign`, currently level with
  `origin/main`, no upstream). No PR ceremony.
- Pushing to `main` auto-deploys to Vercel. There is no CI config and `.vercel` is gitignored.
- `Anshuman_Pati_Resume.pdf` (repo root) is the **latest** resume — read it when the user asks
  about current experience/roles/skills rather than inferring them from the site copy. It is
  untracked; the hero "Download Resume" button still links to a Google Drive URL, so publishing
  a new resume means updating that `href` in `Hero.jsx` too.