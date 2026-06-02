// src/SiteHeader.jsx
import React from 'react';
import { Group, Box, Button, Menu, Burger, Drawer, Stack, Divider, Text, UnstyledButton, Container, SegmentedControl } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconDownload } from '@tabler/icons-react';
import { useApp, ROUTES, scrollToAnchor, downloadFile } from './lib.jsx';

function BrandMark({ onClick }) {
  return (
    <UnstyledButton onClick={onClick} aria-label="Let's save water — home">
      <Box style={{ border: '1px solid var(--mantine-color-gray-6)', borderRadius: 'var(--mantine-radius-sm)', padding: '6px 14px', fontWeight: 700, letterSpacing: '0.06em', fontSize: 'var(--mantine-font-size-sm)', color: 'var(--mantine-color-gray-9)' }}>
        LOGO
      </Box>
    </UnstyledButton>
  );
}

export function SiteHeader() {
  const app = useApp();
  const [drawerOpened, drawer] = useDisclosure(false);

  const goWhatYouCanDo = () => { if (app.route === ROUTES.HOME) scrollToAnchor('what-you-can-do'); else app.navigate(ROUTES.HOME, 'what-you-can-do'); drawer.close(); };
  const goAbout = () => { app.navigate(ROUTES.ABOUT); drawer.close(); };
  const goContact = () => { app.navigate(ROUTES.ABOUT, 'contact'); drawer.close(); };
  const doDownload = (file) => downloadFile(`public/downloads/${file}`);

  // Defer press-pack modal open to avoid race with menu close cycle.
  const openPressPackDeferred = () => { app.setDownloadsOpened(false); setTimeout(() => app.openPressPack(), 0); };

  const navLinkStyle = (active) => ({ fontWeight: 600, fontSize: 'var(--mantine-font-size-sm)', color: active ? 'var(--mantine-color-blue-7)' : 'var(--mantine-color-gray-9)', textDecoration: active ? 'underline' : 'none', textUnderlineOffset: 4 });

  return (
    <>
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between" wrap="nowrap">
          <BrandMark onClick={() => app.navigate(ROUTES.HOME)} />
          <Group gap="lg" visibleFrom="sm" wrap="nowrap">
            <UnstyledButton onClick={goWhatYouCanDo} style={navLinkStyle(false)}>What you can do</UnstyledButton>
            <UnstyledButton onClick={goAbout} style={navLinkStyle(app.route === ROUTES.ABOUT)}>About</UnstyledButton>
            <Menu opened={app.downloadsOpened} onChange={app.setDownloadsOpened} position="bottom-end" shadow="md" width={220} withinPortal keepMounted>
              <Menu.Target>
                <UnstyledButton style={{ ...navLinkStyle(false), display: 'flex', alignItems: 'center', gap: 4 }}>
                  Downloads <IconChevronDown size={15} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item leftSection={<IconDownload size={16} />} onClick={() => doDownload('all-marketing-material.txt')}>All marketing material</Menu.Item>
                <Menu.Item leftSection={<IconDownload size={16} />} onClick={() => doDownload('posters.txt')}>Posters</Menu.Item>
                <Menu.Item onClick={openPressPackDeferred}>Request press pack</Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <UnstyledButton onClick={goContact} style={navLinkStyle(false)}>Contact</UnstyledButton>
            <SegmentedControl
              size="xs"
              value={app.lang}
              onChange={app.setLang}
              data={[
                { label: 'ENG', value: 'en' },
                { label: 'CYM', value: 'cy' },
              ]}
              aria-label="Language"
            />
          </Group>
          <Burger opened={drawerOpened} onClick={drawer.toggle} hiddenFrom="sm" size="sm" aria-label="Open navigation" />
        </Group>
      </Container>

      <Drawer opened={drawerOpened} onClose={drawer.close} position="right" size="80%" title="Menu" hiddenFrom="sm" zIndex={300}>
        <Stack gap="sm">
          <UnstyledButton onClick={goWhatYouCanDo} style={{ ...navLinkStyle(false), fontSize: 'var(--mantine-font-size-md)' }}>What you can do</UnstyledButton>
          <Divider />
          <UnstyledButton onClick={goAbout} style={{ ...navLinkStyle(app.route === ROUTES.ABOUT), fontSize: 'var(--mantine-font-size-md)' }}>About</UnstyledButton>
          <Divider />
          <Text fw={600} fz="md">Downloads</Text>
          <Stack gap="xs" pl="xs">
            <Button variant="subtle" color="gray" justify="flex-start" leftSection={<IconDownload size={16} />} onClick={() => { doDownload('all-marketing-material.txt'); drawer.close(); }}>All marketing material</Button>
            <Button variant="subtle" color="gray" justify="flex-start" leftSection={<IconDownload size={16} />} onClick={() => { doDownload('posters.txt'); drawer.close(); }}>Posters</Button>
            <Button variant="subtle" color="gray" justify="flex-start" onClick={() => { drawer.close(); setTimeout(() => app.openPressPack(), 0); }}>Request press pack</Button>
          </Stack>
          <Divider />
          <UnstyledButton onClick={goContact} style={{ ...navLinkStyle(false), fontSize: 'var(--mantine-font-size-md)' }}>Contact</UnstyledButton>
          <Divider />
          <SegmentedControl
            size="sm"
            fullWidth
            value={app.lang}
            onChange={app.setLang}
            data={[
              { label: 'English (ENG)', value: 'en' },
              { label: 'Welsh (CYM)', value: 'cy' },
            ]}
            aria-label="Language"
          />
        </Stack>
      </Drawer>
    </>
  );
}
