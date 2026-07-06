# Desi Connects Website

App Store–ready marketing and legal site for **Desi Connects** — deployed to [nriconnect.com](https://nriconnect.com) via Netlify.

## Pages

| Page | URL |
|------|-----|
| Homepage | `/` |
| Privacy Policy | `/privacy` → `/legal/privacy.html` (redirect) |
| Terms of Service | `/terms` → `/legal/terms.html` |
| Community Guidelines | `/community-guidelines` → `/legal/community.html` |
| DMCA / Copyright | `/dmca` → `/legal/dmca.html` |
| Do Not Sell (CPRA) | `/do-not-sell` → `/legal/do-not-sell.html` |
| Help & Support | `/support`, `/help` |
| About | `/about` |
| Safety & Moderation | `/safety` |

## Legal Entity

**Sparkle LLC** — support@nriconnect.com · privacy@nriconnect.com

## Development

```bash
npm install
npm run dev
npm run build
```

## Deploy

```bash
npx netlify deploy --prod
```

Publish root: `dist/` (Vite build). Legacy `/legal/*.html` URLs redirect via `netlify.toml`.
