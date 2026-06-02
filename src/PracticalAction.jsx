import React from 'react';
import { Grid, Stack, Group, Box, Title, Text, ThemeIcon, Button, Badge } from '@mantine/core';
import { IconBath, IconDroplet, IconBucket, IconWash, IconWashMachine, IconToiletPaper, IconExternalLink } from '@tabler/icons-react';
import { WireframeImage } from './primitives.jsx';
import { useApp } from './lib.jsx';
import { getGroupCta } from './data.js';

const ICONS = { shower: IconBath, droplet: IconDroplet, bucket: IconBucket, wash: IconWash, machine: IconWashMachine, toilet: IconToiletPaper };

function ActionStep({ step }) {
  const Icon = ICONS[step.icon || 'droplet'];

  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon variant="light" color="blue" radius="md" size={36}>
        <Icon size={18} />
      </ThemeIcon>
      <Box>
        <Text fw={700} style={{ lineHeight: 1.25 }}>{step.title}</Text>
        <Text size="sm" c="dimmed" mt={4} style={{ lineHeight: 1.45 }}>{step.supporting}</Text>
      </Box>
    </Group>
  );
}

export function PracticalActionsGrid({ groups, indexOffset = 0 }) {
  const app = useApp();

  return (
    <Stack gap={80}>
      {groups.map((group, index) => {
        const effectiveIndex = index + indexOffset;
        const groupCta = getGroupCta(app.selectedCompanyId, group.id);

        return (
        <Grid key={group.id} gutter="xl" align="flex-start">
          <Grid.Col span={{ base: 12, sm: 5 }} order={{ base: 1, sm: effectiveIndex % 2 ? 2 : 1 }}>
            <WireframeImage height={260} label={group.title} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 7 }} order={{ base: 2, sm: effectiveIndex % 2 ? 1 : 2 }}>
            <Stack gap={20} h="100%" justify="flex-start" pt={0}>
              <Group gap="sm" align="center">
                <Title order={3}>{group.title}</Title>
                {group.badge && <Badge variant="light" radius="sm">{group.badge}</Badge>}
              </Group>
              <Stack gap={32}>
                {group.steps.map((step) => <ActionStep key={step.id} step={step} />)}
              </Stack>
              <Box>
                <Button
                  component="a"
                  href={groupCta?.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  size="sm"
                  disabled={!groupCta}
                  rightSection={groupCta ? <IconExternalLink size={13} style={{ flexShrink: 0 }} /> : null}
                  style={{ maxWidth: '100%' }}
                  styles={{ label: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }, inner: { minWidth: 0 } }}
                >
                  {groupCta?.label || 'Select a water company above'}
                </Button>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
        );
      })}
    </Stack>
  );
}
