# Amirreza Bagherzadeh Portfolio

Premium dark personal portfolio for Amirreza Bagherzadeh, built with Next.js, TypeScript, Tailwind CSS, Motion, and local editable content.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Check

```bash
npm run lint
npm run build
```

## Editable Content

- Profile, experience, skills, projects, education, testimonials, and contact links: `src/data/profile.ts`
- Main animated portfolio UI: `src/components/portfolio.tsx`
- SEO metadata and fonts: `src/app/layout.tsx`
- Global theme and responsive styling: `src/app/globals.css`
- Image2 prompts for generated assets: `IMAGE2_PROMPTS.md`
- Generated local visuals: `public/visuals`

## Data Notes

The public email is `bagherzadeh@dubaielite.pl`. GitHub is intentionally empty because it was not present in the verified LinkedIn/Apify source. Certifications, recommendations, skills, courses, projects, profile image, and website link are stored in `src/data/profile.ts` and can be edited there.
