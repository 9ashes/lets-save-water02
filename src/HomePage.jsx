// src/HomePage.jsx
import React from 'react';
import { Container, Grid, Stack, Group, Box, Paper, Title, Text, Button, Divider, UnstyledButton, Select } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { WireframeImage } from './primitives.jsx';
import { LocationStats } from './LocationStats.jsx';
import { PracticalActionsGrid } from './PracticalAction.jsx';
import { useApp, ROUTES, scrollToAnchor } from './lib.jsx';
import { PRACTICAL_ACTION_GROUPS, BUSINESS_ACTION_GROUP, WATER_COMPANIES } from './data.js';

function Hero() {
  return (
    <Box component="section" pt="xl" pb={64}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <WireframeImage height={340} label="Hero image" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap="md">
            <Title order={1} style={{ fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.1 }}>
              We&apos;re bringing people, businesses, and water companies together to save water
            </Title>
            <Text size="lg" c="dimmed">We&apos;re using water faster than nature can replace it. Together, we can change that</Text>
            <Box><Button size="md" onClick={() => scrollToAnchor('what-you-can-do')}>Find out how</Button></Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function BusinessPrompt() {
  const app = useApp();
  const isBusiness = app.audienceType === 'business';

  return (
    <Stack gap={0}>
      {!isBusiness ? (
        <Box mt={80} p="xl" bg="var(--mantine-color-gray-1)" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, sm: 7 }}>
              <Stack gap="sm">
                <Group gap="sm">
                  <IconBuilding size={22} color="var(--mantine-color-gray-6)" />
                  <Title order={3} c="gray.8">Do you own or run a business?</Title>
                </Group>
                <Text c="dimmed">
                  Businesses have a big role to play too. There are targeted actions, financial support and practical steps available specifically for workplaces — from small offices to large sites.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 5 }}>
              <Group gap="sm" justify={{ base: 'flex-start', sm: 'flex-end' }}>
                <Button
                  size="md"
                  variant="default"
                  color="gray"
                  onClick={() => app.setAudienceType('business')}
                  leftSection={<IconBuilding size={16} />}
                >
                  Yes, show me what I can do
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
      ) : (
        <Box mt={64}>
          <Group justify="space-between" align="flex-start" mb={32}>
            <Box />
            <UnstyledButton onClick={() => app.setAudienceType('home')} style={{ fontSize: 'var(--mantine-font-size-xs)', color: 'var(--mantine-color-gray-6)', cursor: 'pointer' }}>
              Hide
            </UnstyledButton>
          </Group>
          <PracticalActionsGrid groups={[BUSINESS_ACTION_GROUP]} indexOffset={PRACTICAL_ACTION_GROUPS.length} />
        </Box>
      )}
    </Stack>
  );
}

function WhatYouCanDo() {
  const app = useApp();
  const isBusiness = app.audienceType === 'business';
  const companyOptions = Object.values(WATER_COMPANIES)
    .filter((c) => isBusiness || !c.businessOnly)
    .map((c) => ({ value: c.id, label: c.name }));

  return (
    <Box component="section" id="what-you-can-do" py={64} style={{ scrollMarginTop: 80 }}>
      <Group justify="space-between" align="flex-end" mb={12} gap="lg">
        <Title order={2} style={{ margin: 0 }}>What you can do</Title>
        <Select
          placeholder="Select a water company"
          data={companyOptions}
          value={app.selectedCompanyId}
          onChange={app.setSelectedCompanyId}
          clearable
          searchable
          maw={280}
        />
      </Group>
      <Text c="dimmed" mb={40} maw={720}>
        Saving water starts here. You don&apos;t need to overhaul how you live. Start with something small today. When you&apos;re ready, go further.
      </Text>
      <PracticalActionsGrid groups={PRACTICAL_ACTION_GROUPS} />
      <BusinessPrompt />
    </Box>
  );
}

function AboutEntry() {
  const app = useApp();
  return (
    <Box component="section" pt="xl" pb={80}>
      <Paper withBorder radius="md" p="xl" bg="var(--mantine-color-gray-0)">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Stack gap="md">
              <Title order={2}>A movement backed by the whole sector</Title>
              <Text c="dimmed">Let&apos;s Save Water is an evidence-based campaign across England developed with water companies, regulators and government. Everyone is playing their part.</Text>
              <Box><Button variant="default" size="md" onClick={() => app.navigate(ROUTES.ABOUT)}>Learn More</Button></Box>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <WireframeImage height={220} label="About image" />
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
}

export function HomePage() {
  return (
    <Container size="lg" py={48}>
      <Hero />
      <LocationStats />
      <WhatYouCanDo />
      <AboutEntry />
    </Container>
  );
}
