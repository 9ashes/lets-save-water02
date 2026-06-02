// src/AboutPage.jsx
import React from 'react';
import { Container, Grid, Stack, Group, Box, Paper, Title, Text, Button, List, Badge, Anchor, SimpleGrid, Divider } from '@mantine/core';
import { IconExternalLink, IconCalculator, IconPigMoney, IconBook2 } from '@tabler/icons-react';
import { WireframeImage, StatCard } from './primitives.jsx';
import { WireframeMap } from './WireframeMap.jsx';
import { useApp, ROUTES, mailtoHref } from './lib.jsx';
import { CAMPAIGN_GOALS, WATER_COMPANIES, COMPANY_FOCUS, COMPANY_TOOLS, CONTACT_ROUTES } from './data.js';

function AboutHero() {
  const app = useApp();
  return (
    <Box component="section" pt="xl" pb={64}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <WireframeImage height={300} label="About hero image" style={{ backgroundColor: 'var(--mantine-color-gray-1)' }} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap="md">
            <Title order={1} style={{ fontSize: 'clamp(34px, 5vw, 48px)' }}>Why Let&apos;s Save Water exists</Title>
            <Text size="lg" c="dimmed">Bringing people, businesses and the water sector together to act now.</Text>
            <Box><Button size="md" onClick={() => app.navigate(ROUTES.HOME, 'what-you-can-do')}>Find out what you can do</Button></Box>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function CampaignGoals() {
  return (
    <Box component="section" py={64}>
      <Title order={2} mb="lg">Our Goals - A New Normal for Everyone</Title>
      <Stack gap="md" maw={860} mb="lg">
        <Text c="dimmed">If each of us saves just 28 litres a day (two buckets of water) the difference is real. And that&apos;s not just for us. We&apos;ll be making a difference for future generations.</Text>
        <Text c="dimmed">That&apos;s what Let&apos;s Save Water is working towards. A new normal that protects the way of life we all share, and makes sure there&apos;s enough water for everyone who comes after us.</Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg">
        {CAMPAIGN_GOALS.map((g) => (
          <StatCard key={g.id} size="lg" label={g.value ? g.label : null} value={g.value ? g.value : g.label} support={g.support} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function SharedMovement() {
  return (
    <Box component="section" py={64}>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <WireframeImage height={260} label="A shared movement image" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="md">
            <Title order={2}>A shared movement</Title>
            <Text c="dimmed">Water scarcity is impossible to ignore. That means for everyone.</Text>
            <Text c="dimmed">We want to reach people across every walk of life: individuals, households, workplaces, communities.</Text>
            <Text c="dimmed">We turn evidence into understanding and everyday action. We don&apos;t ask anyone to do everything. We ask everyone to do something.</Text>
            <Text c="dimmed">Because everyone plays their part, and the parts add up to something that lasts.</Text>
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function CompanyInfoBox({ company }) {
  return (
    <Paper withBorder radius="md" p="xl" mt="lg">
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="sm">
            <Title order={3}>{company.name}</Title>
            <Text c="dimmed">{company.intro}</Text>
            <Text fw={600} fz="sm" tt="uppercase" c="dimmed" mt="xs">Water saving credentials</Text>
            <List spacing={4} size="sm">{company.credentials.map((c, i) => (
              <List.Item key={i}>
                {typeof c === 'string' ? (
                  c
                ) : (
                  <Group gap={4} wrap="nowrap">
                    <Anchor href={c.href} target="_blank" rel="noopener noreferrer" size="sm">{c.text}</Anchor>
                    <IconExternalLink size={12} style={{ flexShrink: 0 }} />
                  </Group>
                )}
              </List.Item>
            ))}</List>
            <Group gap="xs" mt="sm" wrap="wrap">
              {(COMPANY_TOOLS[company.id] || []).map((tool, i) => (
                <Button
                  key={i}
                  component="a"
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  size="xs"
                  rightSection={<IconExternalLink size={12} />}
                  styles={{ label: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }, inner: { minWidth: 0 } }}
                  style={{ maxWidth: 240 }}
                >
                  {tool.label}
                </Button>
              ))}
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <Stack gap="sm" align="flex-end">
            <Group gap="xs" justify="flex-end" wrap="wrap">
              {company.areas.map((a) => <Badge key={a} variant="outline" color="gray" radius="sm" size="lg">{a}</Badge>)}
              <Button component="a" href={company.website} target="_blank" rel="noopener noreferrer" variant="light" size="xs" radius="sm" rightSection={<IconExternalLink size={14} />}>Visit website</Button>
            </Group>
            <WireframeImage height={200} label={`${company.name} image`} />
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

function KeyStakeholders() {
  const app = useApp();
  const [companyId, setCompanyId] = React.useState(app.selectedCompanyId || null);
  const [focusKey, setFocusKey] = React.useState(app.selectedCompanyId ? (COMPANY_FOCUS[app.selectedCompanyId] || null) : null);
  const company = companyId ? WATER_COMPANIES[companyId] : null;

  React.useEffect(() => {
    setCompanyId(app.selectedCompanyId || null);
    setFocusKey(app.selectedCompanyId ? (COMPANY_FOCUS[app.selectedCompanyId] || null) : null);
  }, [app.selectedCompanyId]);

  const handleSelect = (id) => {
    setCompanyId(id);
    setFocusKey(id ? COMPANY_FOCUS[id] : null);
    app.setSelectedCompanyId(id);
  };

  return (
    <Box component="section" py={64}>
      <Grid gutter="xl" align="flex-start">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack gap="md">
            <Title order={2}>The whole sector is behind us</Title>
            <Text c="dimmed">Let&apos;s Save Water is the public-facing movement delivered under the Water Efficiency Campaign; an evidence-based, audience-led behaviour change project designed to help people across England and Wales value and use water differently in the public interest.</Text>
            <Text c="dimmed">Our message is delivered on behalf of all 16 water companies, within a governance framework that includes joint oversight from Ofwat, Defra, the Environment Agency, the Welsh Government and Natural Resources Wales.</Text>
            <Text c="dimmed">Everyone is at the table, all pulling in the same direction.</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <WireframeMap mode="boundaries" value={companyId} onChange={handleSelect} focusKey={focusKey} height={380} />
        </Grid.Col>
      </Grid>
      {company ? <CompanyInfoBox company={company} /> : <Text c="dimmed" fz="sm" mt="lg" fs="italic">No water company selected — choose an area on the map or use the selector above.</Text>}
    </Box>
  );
}

function Contact() {
  return (
    <Box component="section" id="contact" pt="xl" pb={80} style={{ scrollMarginTop: 80 }}>
      <Title order={2} mb="lg">Contact</Title>
      <Grid gutter="xl" align="center">
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <WireframeImage height={260} label="Contact image" />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap="lg">
            {CONTACT_ROUTES.map((r) => (
              <Box key={r.id}>
                <Text fw={600}>{r.label}</Text>
                <Anchor href={mailtoHref(r.email)} c="blue.7">{r.email}</Anchor>
              </Box>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export function AboutPage() {
  return (
    <Container size="lg" py={48}>
      <AboutHero />
      <Divider />
      <CampaignGoals />
      <Divider />
      <SharedMovement />
      <Divider />
      <KeyStakeholders />
      <Divider />
      <Contact />
    </Container>
  );
}
