# Jiachen (Chris) Lu — personal site

Static bilingual site for new-graduate software and AI engineering roles. English is at `/` and Japanese is at `/ja/`. It is meant to be published with GitHub Pages at [https://jlu1211.github.io](https://jlu1211.github.io).

## Edit the words

All visible copy lives in:

- [`src/data/i18n/en.ts`](src/data/i18n/en.ts) — English
- [`src/data/i18n/ja.ts`](src/data/i18n/ja.ts) — Japanese
- [`src/data/i18n/facts.ts`](src/data/i18n/facts.ts) — public email, LinkedIn, GitHub, and repository URLs

Change a sentence there, then rebuild. Do not put phone numbers, a street address, immigration or visa details, or the names of companies in an active interview process into these files.

Dates, employers, and numbers on the site follow the November 17, 2026 profile. Where that profile marks a figure as résumé-reported or not freshly checked (USC GPA, the HR time reduction, the token count), the page says so. The Mujin internship is in **Atlanta, USA**.

## Add the résumé PDFs

The download buttons expect these files and no others:

- `public/resume/Jiachen_Lu_Resume_EN.pdf`
- `public/resume/Jiachen_Lu_Resume_JP.pdf`

Copy the PDFs into `public/resume/` using those names, commit, and push to `main`. Until a file is present, its button stays inactive and says the PDF is not uploaded yet. See [`public/resume/README.md`](public/resume/README.md).

## Local preview

```bash
npm install
npm run dev
```

`npm run build` writes the site to `dist/`. `npm run preview` serves that folder.

## Publish on GitHub Pages (one-time)

1. Push this repository to `main` (the workflow file is [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
2. On GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The next push to `main` runs the official Astro action (`withastro/action`) and `actions/deploy-pages`.

The site URL is the user site `https://jlu1211.github.io`, so the Astro `site` in `astro.config.mjs` has no project subpath. Leave it that way unless the repository name changes.
