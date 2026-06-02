# Let's Save Water - Version 0.2

**Status:** Production MVP - Ready for Client Sign-off  
**Purpose:** Minimum Viable Product with core user journeys only  
**Created:** 2026-06-02  
**Audience:** Client stakeholders (sign-off), development team (source of truth)

## Overview

This is the production MVP—a streamlined version of v0.1 focused on core value delivery. It includes all the code from v0.1 but with feature flags documenting which elements are MVP scope vs. future enhancements.

**This is the source-of-truth for development.** All other versions reference this.

## MVP Scope (In Scope)

### Core User Journeys
✅ **Household User:**
1. Land on home page
2. Enter postcode → see local water company + impact stats
3. View "What you can do" practical actions
4. Click action CTAs to external water company resources

✅ **Business User:**
1. Toggle "Do you own a business?" 
2. View business-specific actions
3. Click business support CTAs

### Pages
- ✅ **Home page** (core): Hero, postcode lookup, impact stats, practical actions, business toggle
- ⚠️ **About page** (optional): Can be hidden initially; add if client requires context on program

### Features
- ✅ Postcode lookup with water company assignment
- ✅ Audience toggle (household/business)
- ✅ Company-specific tool links and CTAs
- ✅ Impact statistics cards
- ✅ Practical action cards with external links
- ✅ Cookie consent (required for compliance)
- ✅ Basic footer with links

### Data
- ✅ 24 water companies with real Ofwat PR24 credentials
- ✅ Company-specific tools (calculator, resources, guides)
- ✅ Postcode → company mapping

## Out of Scope (Can Toggle On in v0.3)

❌ **Language Switching (ENG/CYM)**
- Code is present but UI toggle can be hidden
- Reactivate when Welsh language support is client requirement

❌ **Interactive Water Company Map**
- Complex SVG component, no core user need
- Keep in codebase; remove from layout
- Reactivate if company selector visualization is needed

❌ **Press Pack Modal**
- Code present in modals.jsx
- Not required for MVP sign-off
- Can be toggled on when marketing materials are finalized

❌ **About Page Company Deep Dive**
- Full company details, credentials, company tools buttons
- Nice-to-have; not MVP critical
- Can be hidden or shown as optional page

❌ **Legal/Cookie Policy Page**
- Keep code, simplify to essentials
- Placeholder text acceptable for now

## Recommended Homepage Structure (MVP)

```
┌─────────────────────────────────┐
│         Hero Section            │
│    "Save water together"        │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   See How You're Impacted       │
│  [Postcode] [Water Company ▼]   │
│  Impact Stats (3 cards)         │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│      What You Can Do            │
│  [4 Practical Action Cards]     │
│  With external CTAs             │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│  Do you own a business?         │
│  [Yes, show me what I can do]   │
│  (reveals business actions)     │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│          Footer                 │
└─────────────────────────────────┘
```

## Feature Flags / Configuration

To manage MVP scope, add to `src/config.js`:

```javascript
export const FEATURE_FLAGS = {
  SHOW_LANGUAGE_SWITCHER: false,      // Toggle in v0.3
  SHOW_WATER_COMPANY_MAP: false,      // Toggle in v0.3
  SHOW_PRESS_PACK_MODAL: false,       // Toggle in v0.3
  SHOW_ABOUT_PAGE_NAV: false,         // Toggle in v0.3
  SHOW_LEGAL_PAGE_NAV: true,          // Keep for compliance
};
```

Then in components:
```javascript
{FEATURE_FLAGS.SHOW_LANGUAGE_SWITCHER && <LanguageToggle />}
```

## Breaking Changes from v0.1

None—this is a strict code subset with conditional visibility.

## Deliverables for Client Sign-off

- [x] Functional postcode lookup
- [x] Real water company data
- [x] Household action pathways
- [x] Business user pathways
- [x] External CTA links verified
- [x] Mobile responsive layout
- [x] Accessibility basic check
- [x] Cookie compliance

## Development Handoff Notes

**To Developer:**
1. This codebase is your source-of-truth
2. All code from v0.1 is present; features marked as "out of scope" can be conditionally disabled
3. See FEATURE_FLAGS in config.js for toggles
4. v0.1 is available if you need to understand design reasoning
5. Do not merge v0.3 changes back into v0.2

**Testing Checklist:**
- [ ] Postcode lookup works for all UK regions
- [ ] Water company dropdown filters correctly
- [ ] Business toggle reveals/hides correct actions
- [ ] External CTA links are live and correct
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Cookie banner appears and can be dismissed
- [ ] No console errors

## Technology Stack
- React 18 + Vite 8
- Mantine 7.15.3
- Tabler Icons
- Hash-based routing
- Mock data (no backend required)

## File Structure (Same as v0.1)

```
src/
├── App.jsx                 # Root component, state management
├── HomePage.jsx            # Core MVP page
├── AboutPage.jsx           # Optional (toggleable)
├── LegalPage.jsx           # Compliance required
├── LocationStats.jsx       # Core postcode + stats
├── PracticalAction.jsx     # Core action cards
├── WireframeMap.jsx        # Optional (toggleable)
├── SiteHeader.jsx          # Core nav
├── SiteFooter.jsx          # Footer
├── data.js                 # Water company data
└── config.js               # NEW: Feature flags
```

## Git History

```
v0.2.0 - Production MVP: Core user journeys, feature flags for future expansion
```

---
**Note:** This version is frozen for client sign-off. Development evolution continues in v0.3.
