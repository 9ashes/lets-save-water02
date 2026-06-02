// src/lib.jsx
// Shared application context, router and small helpers.
// PORTABILITY NOTE: in a real Mantine/React app these would typically be split
// into a router library + a context provider. Kept dependency-free here so the
// prototype runs as a single client-side deliverable. Component tree is unchanged.
import React from 'react';
import { HEADER_HEIGHT } from './theme.js';

// ---- Routes -------------------------------------------------------------
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LEGAL: '/accessibility-privacy-cookies',
};

// ---- App context --------------------------------------------------------
// Single source of truth shared across header, footer, pages.
export const AppContext = React.createContext(null);

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside <AppProvider>');
  return ctx;
}

// ---- Anchor scrolling (accounts for the sticky header) ------------------
export function scrollToAnchor(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - 16;
  window.scrollTo({ top: y, behavior: 'smooth' });
  return true;
}

// ---- Downloads ----------------------------------------------------------
// Triggers a real placeholder download in the prototype.
export function downloadFile(path, filename) {
  const a = document.createElement('a');
  a.href = path;
  a.download = filename || path.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ---- Email / share intent helpers --------------------------------------
// Builds a provider compose URL with a mailto: fallback. Opens in a new tab.
export function openMailProvider(provider, { to, subject, body }) {
  const enc = encodeURIComponent;
  const urls = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`,
  };
  const url = urls[provider];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = `mailto:${to}?subject=${enc(subject)}&body=${enc(body)}`;
  }
}

export function mailtoHref(to, subject, body) {
  const enc = encodeURIComponent;
  let href = `mailto:${to}`;
  const params = [];
  if (subject) params.push(`subject=${enc(subject)}`);
  if (body) params.push(`body=${enc(body)}`);
  if (params.length) href += `?${params.join('&')}`;
  return href;
}
