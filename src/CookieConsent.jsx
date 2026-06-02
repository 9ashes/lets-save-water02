// src/CookieConsent.jsx
// Persistence: localStorage key "lsw-cookie-consent".
// Reset: run window.resetCookieConsent() in the console.
import React from 'react';
import { Modal, Stack, Group, Button, Text, Title, Anchor } from '@mantine/core';
import { useApp, ROUTES } from './lib.jsx';

const STORAGE_KEY = 'lsw-cookie-consent';

export function CookieConsent() {
  const app = useApp();
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    window.resetCookieConsent = () => { window.localStorage.removeItem(STORAGE_KEY); setOpened(true); };
    try { if (!window.localStorage.getItem(STORAGE_KEY)) setOpened(true); } catch (e) { setOpened(true); }
  }, []);

  const decide = (choice) => {
    try { window.localStorage.setItem(STORAGE_KEY, choice); } catch (e) { /* ignore */ }
    setOpened(false);
  };

  return (
    <Modal opened={opened} onClose={() => decide('dismissed')} title={<Title order={4}>Cookies &amp; privacy</Title>} centered radius="sm" size="md" overlayProps={{ backgroundOpacity: 0.55, blur: 0 }}>
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          We use cookies to understand how this site is used and to improve the campaign.
          You can accept all cookies or decline non-essential ones. See our{' '}
          <Anchor component="button" type="button" onClick={() => { decide('dismissed'); app.navigate(ROUTES.LEGAL); }}>
            accessibility, privacy and cookies
          </Anchor>{' '}
          page for details. (Placeholder text — prototype only.)
        </Text>
        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={() => decide('declined')}>Decline</Button>
          <Button onClick={() => decide('accepted')}>Accept all</Button>
        </Group>
      </Stack>
    </Modal>
  );
}
