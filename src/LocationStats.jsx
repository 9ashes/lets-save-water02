// src/LocationStats.jsx
import React from 'react';
import { Grid, Stack, Title, Text, Box } from '@mantine/core';
import { StatCard } from './primitives.jsx';

export function LocationStats() {
  return (
    <Box component="section" py={64}>
      <Grid gutter="xl" align="stretch">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="lg">
            <Title order={2}>Everyone has a part to play</Title>
            <Stack gap="md" maw={760}>
              <Text c="dimmed">The water industry is already acting - investing billions to fix leaks, upgrade infrastructure and increase supply.</Text>
              <Box mb="lg" />
              <Title order={3}>That&apos;s where we all come in</Title>
              <Text c="dimmed">Investment alone can&apos;t solve the challenge. It has to come from all of us. The small, everyday choices made in homes and workplaces can make a big difference.</Text>
              <Text c="dimmed">Collective action is at the heart of this. No single effort solves it. But lots of small ones, taken together, add up to real change.</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Box
            role="img"
            aria-label="Image placeholder"
            h={460}
            radius="md"
            bd="1px solid"
            c="gray.4"
            style={{
              width: '100%',
              backgroundColor: 'var(--mantine-color-gray-0)',
              backgroundImage: `linear-gradient(to top right, transparent calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% + 0.75px), transparent calc(50% + 0.75px)), linear-gradient(to top left, transparent calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% + 0.75px), transparent calc(50% + 0.75px))`,
            }}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
