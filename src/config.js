// src/config.js
// Feature flags for v0.2 - Production MVP
// All features from v0.1 are present in code but can be toggled via flags

export const FEATURE_FLAGS = {
  // ── Core MVP Features (ALWAYS ON) ────────────────────────────────
  SHOW_HOMEPAGE: true,
  SHOW_POSTCODE_LOOKUP: true,
  SHOW_IMPACT_STATS: true,
  SHOW_PRACTICAL_ACTIONS: true,
  SHOW_BUSINESS_TOGGLE: true,
  SHOW_FOOTER: true,
  SHOW_COOKIE_CONSENT: true,
  SHOW_LEGAL_PAGE: true,

  // ── v0.3 Enhancements (OFF in v0.2, will toggle on in v0.3) ───────
  SHOW_LANGUAGE_SWITCHER: false,      // Toggle in v0.3 Phase 1
  SHOW_WATER_COMPANY_MAP: false,      // Toggle in v0.3 Phase 1
  SHOW_PRESS_PACK_MODAL: false,       // Toggle in v0.3 Phase 1
  SHOW_ABOUT_PAGE_NAV: false,         // Toggle in v0.3 Phase 1
  SHOW_ABOUT_PAGE: false,             // Toggle in v0.3 Phase 1

  // Future phases (v0.3)
  ENABLE_LOCAL_STORAGE: false,        // Phase 2
  SHOW_IMPACT_CALCULATOR: false,      // Phase 2
  SHOW_SOCIAL_SHARING: false,         // Phase 2
  SHOW_ACHIEVEMENTS: false,           // Phase 2
  SHOW_NEWSLETTER_SIGNUP: false,      // Phase 2
  ENABLE_BACKEND: false,              // Phase 3
  ENABLE_AUTH: false,                 // Phase 3
  SHOW_PERSONALIZED_RECS: false,      // Phase 3
  ENABLE_ANALYTICS: false,            // Phase 3
  ENABLE_AB_TESTING: false,           // Phase 3
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (flag) => {
  return FEATURE_FLAGS[flag] ?? false;
};

export default FEATURE_FLAGS;
