# Rapid MDRO Diagnostic Stewardship Workflow

Public static site for Marious Akugri's Rapid MDRO Diagnostic Stewardship Workflow and LIS Alert/Comment Reference.

## Intended Interim URL

- https://kakugri.dev/mdro-stewardship/

This repository is prepared to publish the site as a GitHub Pages project page, parallel to the GIFTS site at `https://kakugri.dev/gifts-site/`.

## Contents

- public HTML page
- browser-only dry-run workflow builder
- comment bank and synthetic scenarios
- downloadable v1.0 public reference PDF
- mirrored Markdown artifact files
- static-link preflight script
- GitHub Pages deployment workflow

## Local Preview

Open `index.html` directly, or serve the directory with any simple static file server.

## Preflight Check

Run:

```bash
bash check-static-links.sh
```

## GitHub Pages

This repository is prepared for GitHub Pages with:

- `.github/workflows/deploy-pages.yml`

Before first deployment, enable `Pages -> GitHub Actions` in the repository settings.

After deployment, capture the live site from the Marious EB-2 NIW workspace:

```bash
node immigration-workspace-private/Marious-Akugri-EB2-NIW/04_evidence-build/scripts/capture_hosted_public_site.js https://kakugri.dev/mdro-stewardship/
```
