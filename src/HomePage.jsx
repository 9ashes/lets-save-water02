// src/HomePage.jsx
import React from 'react';
import { Container, Grid, Stack, Group, Box, Title, Text, Button, Divider, UnstyledButton, SimpleGrid } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { WireframeImage, StatCard } from './primitives.jsx';
import { LocationStats } from './LocationStats.jsx';
import { PracticalActionsGrid } from './PracticalAction.jsx';
import { useApp, ROUTES, scrollToAnchor } from './lib.jsx';
import { PRACTICAL_ACTION_GROUPS, BUSINESS_ACTION_GROUP } from './data.js';

function Hero() {
  return (
    <Box component="section" pt="xl" pb={64}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <WireframeImage height={340} label="Hero image" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap="md">
            <Title order={1} style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}>
              We&apos;re bringing people, businesses, and the water industry together.
            </Title>
            <Text size="lg" c="dimmed">Our shifting climate and growing demand are already making water supplies less predictable for people, places and wildlife. But we can change things.</Text>
            <Box><Button size="md" onClick={() => scrollToAnchor('what-you-can-do')}>Find out how</Button></Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function EnglandWalesSection() {
  return (
    <Box component="section" bg="var(--mantine-color-gray-1)" py={64} style={{ marginLeft: 'calc(var(--mantine-spacing-xl) * -1)', marginRight: 'calc(var(--mantine-spacing-xl) * -1)', paddingLeft: 'var(--mantine-spacing-xl)', paddingRight: 'var(--mantine-spacing-xl)' }}>
      <Container size="lg">
        <Stack gap="xl">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Box style={{ display: 'flex', gap: 'var(--mantine-spacing-md)', alignItems: 'flex-start' }}>
                <img src="/maps/England.svg" alt="Map of England" style={{ width: 80, height: 80, flexShrink: 0 }} />
                <Text fw={700} size="lg">In England, water scarcity is already happening. We&apos;re using water faster than nature replaces it.</Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Box style={{ display: 'flex', gap: 'var(--mantine-spacing-md)', alignItems: 'flex-start' }}>
                <img src="/maps/Wales.svg" alt="Map of Wales" style={{ width: 80, height: 80, flexShrink: 0 }} />
                <Text fw={700} size="lg">In Wales, drier summers and wetter winters are increasing pressure on our water network.</Text>
              </Box>
            </Grid.Col>
          </Grid>
          <SimpleGrid cols={{ base: 1, sm: 5 }} spacing="lg">
            <StatCard
              label={null}
              value="5 billion litres"
              support="Potential daily shortfall in England by 2055 if we don't act."
            />
            <StatCard
              label={null}
              value="88%"
              support="of businesses in England are located in areas at risk of supply deficit by 2030"
            />
            <StatCard
              label="We all use"
              value="5X"
              support="more than we think. The average person estimates 20L a day; in reality it's nearer 140L."
            />
            <StatCard
              label="Saving just"
              value="28 litres"
              support="per person, per day will help protect water for people, places and nature."
            />
            <StatCard
              label={null}
              value="TBC"
              support="Wales specific stat related to climate change impact (Met Office)"
            />
          </SimpleGrid>
        </Stack>
      </Container>
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

function WaterCompanySection() {
  const app = useApp();
  return (
    <Box mt={80} p="xl" bg="var(--mantine-color-gray-1)" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="md" maw={720}>
            <Title order={3}>Your water company can help you go further</Title>
            <Text c="dimmed">
              From water-saving devices to home efficiency checks, your water company has practical support available.
            </Text>
            <Box>
              <Button size="md" variant="default" color="gray" onClick={() => {
                app.setOpenWaterCompanyDropdown(true);
                app.navigate(ROUTES.ABOUT, 'the-whole-sector-is-behind-us');
              }}>
                Select your water company
              </Button>
            </Box>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <WireframeImage height={180} label="Water company" />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function WhatYouCanDo() {
  return (
    <Box component="section" id="what-you-can-do" py={64} style={{ scrollMarginTop: 80 }}>
      <Title order={2} mb={12}>What you can do</Title>
      <Text c="dimmed" mb={40} maw={720}>
        Saving water starts here. You don&apos;t need to rethink how you live. Start with something small today. When you&apos;re ready, go further.
      </Text>
      <PracticalActionsGrid groups={PRACTICAL_ACTION_GROUPS} />
      <WaterCompanySection />
      {/* <BusinessPrompt /> - Hidden in v0.2 */}
    </Box>
  );
}

function AboutEntry() {
  const app = useApp();
  return (
    <Box component="section" py={64}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="md">
            <Title order={2}>A movement backed by the whole sector</Title>
            <Text c="dimmed">Let&apos;s Save Water is an evidence-based behaviour change campaign across England and Wales backed by water companies and regulators. Everyone is playing their part.</Text>
            <Box><Button variant="default" size="md" onClick={() => app.navigate(ROUTES.ABOUT)}>Learn More</Button></Box>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <WireframeImage height={220} label="About image" />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export function HomePage() {
  return (
    <>
      <Container size="lg" py={48}>
        <Hero />
      </Container>
      <EnglandWalesSection />
      <Container size="lg" py={48}>
        <LocationStats />
        <WhatYouCanDo />
        <AboutEntry />
      </Container>
    </>
  );
}
