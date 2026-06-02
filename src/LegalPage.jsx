// src/LegalPage.jsx
import React from 'react';
import { Container, Stack, Title, Text, Alert, Divider, List } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export function LegalPage() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1}>Accessibility, privacy and cookies</Title>
        <Alert variant="light" color="blue" icon={<IconInfoCircle size={16} />}>
          This page sets out the accessibility, privacy and cookies information for the site.
        </Alert>
        <Divider />
        <Stack gap="sm">
          <Title order={2}>Accessibility statement</Title>
          <Text>We want everyone to be able to use the Let&apos;s save water website. This statement describes how the site aims to meet recognised accessibility standards, how people can request content in alternative formats, and how to report accessibility problems.</Text>
          <Text>The site is built with accessible components: semantic headings, keyboard-operable menus and modals, visible focus states and readable colour contrast.</Text>
        </Stack>
        <Divider />
        <Stack gap="sm">
          <Title order={2}>Privacy and cookies</Title>
          <Text>This privacy and cookies statement explains what information the site collects, how it is used, the legal basis for processing, and how long information is kept. It also describes the choices available to visitors.</Text>
          <Text fw={600}>How we use cookies</Text>
          <List spacing={6}>
            <List.Item>Essential cookies needed for the site to function.</List.Item>
            <List.Item>Analytics cookies that help us understand how the site is used.</List.Item>
            <List.Item>Preference cookies that remember your choices.</List.Item>
          </List>
          <Text>You can accept or decline non-essential cookies using the consent prompt shown on your first visit.</Text>
        </Stack>
      </Stack>
    </Container>
  );
}
