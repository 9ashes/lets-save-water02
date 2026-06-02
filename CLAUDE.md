# Let's Save Water — v0.1

React + Vite + Mantine 7 prototype. Handoff from Claude Design.

## Stack
- React 18, Vite 8
- Mantine 7.15.3 (`@mantine/core`, `@mantine/hooks`)
- Tabler Icons (`@tabler/icons-react`)

## Commands
```
npm run dev      # start dev server (localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the dist build
```

## Source layout
All app code lives in `src/`. Entry: `src/main.jsx` → `src/App.jsx`.

| File | Purpose |
|---|---|
| App.jsx | Root component, hash-based router, shared state |
| theme.js | Mantine theme tokens |
| lib.jsx | AppContext, route constants, helpers |
| data.js | Static data (postcode lookups, tips, etc.) |
| primitives.jsx | Low-level shared UI components |
| modals.jsx | PressPackModal and other overlays |
| HomePage.jsx | Home page (household / business toggle) |
| AboutPage.jsx | About page |
| LegalPage.jsx | Legal / cookie policy page |
| SiteHeader.jsx | Global nav header |
| SiteFooter.jsx | Global footer |
| CookieConsent.jsx | Cookie banner |
| LocationStats.jsx | Postcode-based stats panel |
| PracticalAction.jsx | Tips / action cards |
| WireframeMap.jsx | SVG wireframe map component |

## Notes
- Routing is hash-based (`#home`, `#about`, `#legal`) — no React Router needed.
- `npm install` requires `--legacy-peer-deps` due to eslint peer version mismatch.
- Public assets (sketch images) are in `public/uploads/`.
