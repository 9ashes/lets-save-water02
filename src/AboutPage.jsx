// src/AboutPage.jsx
import React from 'react';
import { Container, Grid, Stack, Group, Box, Paper, Title, Text, Button, List, Badge, Anchor, SimpleGrid, Divider, Select, ThemeIcon } from '@mantine/core';
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
            <Title order={1}>Why Let&apos;s Save Water exists</Title>
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
      <Title order={2} mb="lg">Our goal - a new normal for everyone</Title>
      <Stack gap="md" maw={860} mb="lg">
        <Text c="dimmed">If each of us saves just 28 litres a day (two buckets of water) the difference is real. And that&apos;s not just for us. We&apos;ll be making a difference for future generations.</Text>
        <Text c="dimmed">That&apos;s what Let&apos;s Save Water is working towards. A new normal that protects the way of life we all share and makes sure there&apos;s enough water for everyone who comes after us.</Text>
        <Text c="dimmed">We can do this. Together.</Text>
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
            <Text c="dimmed">Water is precious. To protect it, we all need to use less.</Text>
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
      <Stack gap="md">
        {/* Row 1: Company name + link and area badges */}
        <Stack gap="xs">
          <Group gap="xs" align="center">
            <Title order={3}>{company.name}</Title>
            <Anchor href={company.website} target="_blank" rel="noopener noreferrer" c="dimmed">
              <IconExternalLink size={18} />
            </Anchor>
          </Group>
          <Group gap="xs" wrap="wrap">
            {company.areas.map((a) => <Badge key={a} variant="outline" color="gray" radius="sm" size="xs">{a}</Badge>)}
          </Group>
        </Stack>

        {/* Row 2: Two columns - image and activities */}
        <Group gap="md" align="flex-start" style={{ display: 'flex', width: '100%' }}>
          <Box style={{ width: 120, height: 120, flexShrink: 0 }}>
            <WireframeImage height={120} label={`${company.name} logo`} />
          </Box>
          <Stack gap="sm" style={{ flex: 1, minWidth: 0 }}>
            <Text fw={600} fz="sm" tt="uppercase" c="dimmed">Water saving activities</Text>
            <List spacing="xs" size="sm">{company.credentials.map((c, i) => (
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
          </Stack>
        </Group>

        {/* Row 3: Full-width buttons */}
        <Group gap="xs" wrap="wrap">
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
    </Paper>
  );
}

const GOVERNANCE_ORGS = [
  { name: 'Ofwat', href: 'https://www.ofwat.gov.uk' },
  { name: 'Defra', href: 'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs' },
  { name: 'The Environment Agency', href: 'https://www.gov.uk/government/organisations/environment-agency' },
  { name: 'The Welsh Government', href: 'https://www.gov.wales' },
  { name: 'Natural Resources Wales', href: 'https://naturalresources.wales' },
];

function GovernanceDefault() {
  const logoBoxStyle = {
    border: '1px solid var(--mantine-color-gray-4)',
    borderRadius: 'var(--mantine-radius-md)',
    backgroundColor: 'var(--mantine-color-gray-0)',
    backgroundImage: `linear-gradient(to top right, transparent calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% + 0.75px), transparent calc(50% + 0.75px)), linear-gradient(to top left, transparent calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% - 0.75px), var(--mantine-color-gray-4) calc(50% + 0.75px), transparent calc(50% + 0.75px))`,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
    padding: '16px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--mantine-color-gray-7)',
    textAlign: 'center',
  };

  return (
    <Paper withBorder radius="md" p="xl">
      <Stack gap="md">
        <Title order={3}>Governance representatives</Title>
        <Stack gap="md" align="center">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" style={{ width: '100%' }}>
            {GOVERNANCE_ORGS.slice(0, 4).map((org) => (
              <Box
                key={org.name}
                component="a"
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                style={logoBoxStyle}
              >
                {org.name} logo
              </Box>
            ))}
          </SimpleGrid>
          <Box
            component="a"
            href={GOVERNANCE_ORGS[4].href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...logoBoxStyle, maxWidth: 280 }}
          >
            {GOVERNANCE_ORGS[4].name} logo
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}

function KeyStakeholders() {
  const app = useApp();
  const [companyId, setCompanyId] = React.useState(app.selectedCompanyId || null);
  const [dropdownOpened, setDropdownOpened] = React.useState(false);
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const [overlayFading, setOverlayFading] = React.useState(false);

  const company = companyId ? WATER_COMPANIES[companyId] : null;
  const companyOptions = Object.values(WATER_COMPANIES)
    .filter((c) => !c.businessOnly)
    .map((c) => ({ value: c.id, label: c.name }));

  const dismiss = () => {
    setDropdownOpened(false);
    setOverlayFading(true);
    setTimeout(() => {
      setOverlayVisible(false);
      setOverlayFading(false);
    }, 250);
  };

  const handleSelect = (id) => {
    setCompanyId(id);
    app.setSelectedCompanyId(id);
    dismiss();
  };

  const handleClear = () => {
    setCompanyId(null);
    app.setSelectedCompanyId(null);
  };

  React.useEffect(() => {
    if (app.openWaterCompanyDropdown) {
      setDropdownOpened(true);
      setOverlayVisible(true);
      app.setOpenWaterCompanyDropdown(false);
    }
  }, [app.openWaterCompanyDropdown]);

  return (
    <>
      {overlayVisible && (
        <Box
          onClick={dismiss}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 150,
            opacity: overlayFading ? 0 : 1,
            transition: 'opacity 250ms ease',
          }}
        />
      )}
      <Box component="section" id="the-whole-sector-is-behind-us" py={64}>
        <Grid gutter={40} align="flex-start">
          <Grid.Col span={{ base: 12, sm: 6 }} style={{ position: 'relative', zIndex: overlayVisible ? 160 : 'auto' }}>
            <Stack gap="lg">
              <Title order={2}>The whole sector is behind us</Title>
              <Text c="dimmed">Let&apos;s Save Water is the public-facing brand of the Water Efficiency Campaign (WEC); an evidence-based, audience-led behaviour change initiative designed to help people across England and Wales value and use water differently in the public interest.</Text>
              <Text c="dimmed">Our message is delivered with support from all 16 water companies, within a governance framework that includes joint oversight from Ofwat, Defra, the Environment Agency, the Welsh Government and Natural Resources Wales.</Text>
              <Text c="dimmed">Everyone is at the table, all pulling in the same direction.</Text>
              <Stack gap="xs">
                <Text fw={500} fz="sm" c={overlayVisible ? 'white' : undefined}>Select your water company</Text>
                <Select
                  placeholder="Choose a water company"
                  data={companyOptions}
                  value={companyId}
                  onChange={handleSelect}
                  clearable
                  searchable
                  onClearButtonClick={handleClear}
                  maw={240}
                  dropdownOpened={dropdownOpened}
                  onDropdownOpen={() => setDropdownOpened(true)}
                  onDropdownClose={() => { setDropdownOpened(false); dismiss(); }}
                  comboboxProps={{ zIndex: 170 }}
                />
                <Anchor
                  href="https://www.water.org.uk/customers/find-your-supplier"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  c={overlayVisible ? 'white' : undefined}
                  style={{ marginTop: 4 }}
                >
                  <Group gap={4} align="center" wrap="nowrap">
                    Not sure? Find your supplier on water.org.uk
                    <IconExternalLink size={14} style={{ flexShrink: 0 }} />
                  </Group>
                </Anchor>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            {company ? <CompanyInfoBox company={company} /> : <GovernanceDefault />}
          </Grid.Col>
        </Grid>
      </Box>
    </>
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
            <Title order={3}>Ready to play your part?</Title>
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
