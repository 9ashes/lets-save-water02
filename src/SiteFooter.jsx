// src/SiteFooter.jsx
import React from 'react';
import { Box, Container, Group, Stack, UnstyledButton, ActionIcon, Anchor, Text, Divider } from '@mantine/core';
import { IconBrandFacebook, IconBrandTwitter, IconBrandTiktok, IconBrandLinkedin } from '@tabler/icons-react';
import { useApp, ROUTES } from './lib.jsx';
import { SOCIAL_LINKS } from './data.js';

const SOCIAL_ICONS = { facebook: IconBrandFacebook, twitter: IconBrandTwitter, tiktok: IconBrandTiktok, linkedin: IconBrandLinkedin };

export function SiteFooter() {
  const app = useApp();
  const footerLinkStyle = { fontWeight: 600, fontSize: 'var(--mantine-font-size-sm)', color: 'var(--mantine-color-gray-9)' };
  const openHeaderDownloads = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => app.setDownloadsOpened(true), 350); };

  return (
    <Box component="footer" style={{ borderTop: '1px solid var(--mantine-color-gray-3)', background: 'var(--mantine-color-gray-0)', marginTop: 'var(--mantine-spacing-xl)' }}>
      <Container size="lg" py="xl">
        <Stack gap="lg" align="center">
          <Group gap="xl" justify="center" wrap="wrap">
            <UnstyledButton onClick={() => app.navigate(ROUTES.HOME)} style={footerLinkStyle}>Home</UnstyledButton>
            <UnstyledButton onClick={() => app.navigate(ROUTES.ABOUT)} style={footerLinkStyle}>About</UnstyledButton>
            <UnstyledButton onClick={openHeaderDownloads} style={footerLinkStyle}>Downloads</UnstyledButton>
            <UnstyledButton onClick={() => app.navigate(ROUTES.ABOUT, 'contact')} style={footerLinkStyle}>Contact</UnstyledButton>
          </Group>
          <Group gap="sm" justify="center">
            {SOCIAL_LINKS.map((s) => {
              const Icon = SOCIAL_ICONS[s.id];
              return (
                <ActionIcon key={s.id} component="a" href={s.url} target="_blank" rel="noopener noreferrer" variant="default" size="lg" radius="xl" aria-label={s.label}>
                  <Icon size={18} />
                </ActionIcon>
              );
            })}
          </Group>
          <Divider w="100%" maw={520} />
          <Group gap="xl" justify="center">
            <Anchor component="button" type="button" onClick={() => app.navigate(ROUTES.LEGAL)} c="blue.7" fw={600} fz="sm">
              Accessibility, privacy and cookies
            </Anchor>
          </Group>
          <Text fz="sm" c="dimmed">&copy; Let&apos;s save water 2026</Text>
        </Stack>
      </Container>
    </Box>
  );
}
