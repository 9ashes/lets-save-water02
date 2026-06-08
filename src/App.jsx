// src/App.jsx
// Application entry: theme provider, AppShell layout, lightweight router and
// the shared app state (audience type, downloads menu, press-pack modal).
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, AppShell } from '@mantine/core';
import { theme, HEADER_HEIGHT } from './theme.js';
import { AppContext, ROUTES, scrollToAnchor } from './lib.jsx';
import { PasswordGate } from './PasswordGate.jsx';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { CookieConsent } from './CookieConsent.jsx';
import { PressPackModal } from './modals.jsx';
import { HomePage } from './HomePage.jsx';
import { AboutPage } from './AboutPage.jsx';
import { LegalPage } from './LegalPage.jsx';

const VALID_ROUTES = Object.values(ROUTES);

function routeFromHash() {
  const h = window.location.hash.replace(/^#/, '');
  return VALID_ROUTES.includes(h) ? h : ROUTES.HOME;
}

function App() {
  const [route, setRoute] = React.useState(routeFromHash());
  const [pendingAnchor, setPendingAnchor] = React.useState(null);
  const [audienceType, setAudienceType] = React.useState('home'); // 'home' | 'business'
  const [selectedCompanyId, setSelectedCompanyId] = React.useState(null);
  const [lang, setLang] = React.useState('en'); // 'en' | 'cy'
  const [downloadsOpened, setDownloadsOpened] = React.useState(false);
  const [pressPackOpened, setPressPackOpened] = React.useState(false);
  const [openWaterCompanyDropdown, setOpenWaterCompanyDropdown] = React.useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = React.useState(true);

  const navigate = React.useCallback((to, anchor = null) => {
    setRoute(to);
    setPendingAnchor(anchor);
    window.location.hash = '#' + to;
    if (!anchor) window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Back/forward + manual hash edits.
  React.useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Resolve a pending anchor after the new page renders (retry until present).
  React.useEffect(() => {
    if (!pendingAnchor) return;
    let attempts = 0;
    const tick = () => {
      if (scrollToAnchor(pendingAnchor) || attempts > 20) {
        setPendingAnchor(null);
        return;
      }
      attempts += 1;
      setTimeout(tick, 50);
    };
    const id = setTimeout(tick, 60);
    return () => clearTimeout(id);
  }, [pendingAnchor, route]);

  const ctx = {
    route, navigate,
    audienceType, setAudienceType,
    selectedCompanyId, setSelectedCompanyId,
    lang, setLang,
    downloadsOpened, setDownloadsOpened,
    openPressPack: () => setPressPackOpened(true),
    openWaterCompanyDropdown, setOpenWaterCompanyDropdown,
  };

  let page;
  if (route === ROUTES.ABOUT) page = <AboutPage />;
  else if (route === ROUTES.LEGAL) page = <LegalPage />;
  else page = <HomePage />;

  return (
    <MantineProvider theme={theme} defaultColorScheme="light" env="test">
      <PasswordGate onUnlock={setShowPrivacyModal}>
        <AppContext.Provider value={ctx}>
          <AppShell header={{ height: HEADER_HEIGHT }} padding={0}>
            <AppShell.Header>
              <SiteHeader />
            </AppShell.Header>
            <AppShell.Main>
              {page}
              <SiteFooter />
            </AppShell.Main>
          </AppShell>

          <CookieConsent forceShow={showPrivacyModal} />
          <PressPackModal opened={pressPackOpened} onClose={() => setPressPackOpened(false)} />
        </AppContext.Provider>
      </PasswordGate>
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
