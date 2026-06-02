// src/LocationStats.jsx
import React from 'react';
import { Grid, Stack, Group, Title, Text, TextInput, ActionIcon, SimpleGrid, SegmentedControl, Alert, Loader, Box, Select } from '@mantine/core';
import { IconArrowRight, IconAlertCircle } from '@tabler/icons-react';
import { StatCard } from './primitives.jsx';
import { WireframeMap } from './WireframeMap.jsx';
import { useApp } from './lib.jsx';
import { WATER_COMPANIES, COMPANY_FOCUS, lookupPostcode } from './data.js';

export function LocationStats() {
  const app = useApp();
  const isBusiness = app.audienceType === 'business';
  const [postcode, setPostcode] = React.useState('');
  const [status, setStatus] = React.useState('idle');
  const [companyId, setCompanyId] = React.useState(null);
  const [focusKey, setFocusKey] = React.useState(null);
  const timer = React.useRef(null);
  const company = companyId ? WATER_COMPANIES[companyId] : null;

  const submit = (e) => {
    e?.preventDefault();
    if (timer.current) clearTimeout(timer.current);
    setStatus('loading');
    timer.current = setTimeout(() => {
      const res = lookupPostcode(postcode);
      if (res.status === 'success') {
        setCompanyId(res.companyId);
        setFocusKey(res.focus);
        app.setSelectedCompanyId(res.companyId);
        setStatus('success');
      } else {
        app.setSelectedCompanyId(null);
        setStatus(res.status);
      }
    }, 900);
  };

  const handleMapSelect = (id) => {
    setCompanyId(id);
    setFocusKey(id ? COMPANY_FOCUS[id] : null);
    app.setSelectedCompanyId(id);
    setStatus(id ? 'success' : 'idle');
  };

  const handleDropdownSelect = (id) => {
    setCompanyId(id);
    setFocusKey(id ? COMPANY_FOCUS[id] : null);
    app.setSelectedCompanyId(id);
    setStatus(id ? 'success' : 'idle');
  };

  React.useEffect(() => {
    if (app.selectedCompanyId !== companyId) {
      setCompanyId(app.selectedCompanyId);
      setFocusKey(app.selectedCompanyId ? (COMPANY_FOCUS[app.selectedCompanyId] || null) : null);
      setStatus(app.selectedCompanyId ? 'success' : 'idle');
    }
  }, [app.selectedCompanyId]);

  return (
    <Box component="section" py={64}>
      <Grid gutter={40} align="stretch">
        <Grid.Col span={{ base: 12, sm: 7 }}>
          <Stack gap={24}>
            <Title order={2}>See how you&apos;re impacted</Title>
            <form onSubmit={submit}>
              <Group gap="xs" align="flex-end" maw={640} wrap="wrap">
                <TextInput
                  style={{ flex: 1, minWidth: 180 }}
                  label="Enter a postcode to see your local results"
                  placeholder="Postcode — e.g. SW1A 1AA"
                  aria-label="Postcode"
                  value={postcode}
                  onChange={(e) => { setPostcode(e.currentTarget.value); if (status !== 'idle') setStatus('idle'); }}
                  error={status === 'invalid' ? 'Enter a valid UK postcode' : null}
                  rightSection={<ActionIcon type="submit" variant="filled" aria-label="Search postcode"><IconArrowRight size={16} /></ActionIcon>}
                />
                <Select
                  label="Or select a water company"
                  placeholder="Select a water company"
                  data={Object.values(WATER_COMPANIES).filter((c) => isBusiness || !c.businessOnly).map((c) => ({ value: c.id, label: c.name }))}
                  value={companyId}
                  onChange={handleDropdownSelect}
                  clearable
                  searchable
                  style={{ flex: 1, minWidth: 200 }}
                />
              </Group>
            </form>
            {status === 'loading' && <Group gap="xs"><Loader size="sm" /><Text size="sm" c="dimmed">Checking postcode…</Text></Group>}
            {status === 'unknown' && <Alert variant="light" color="yellow" icon={<IconAlertCircle size={16} />} title="Postcode not found">Check the postcode and try again.</Alert>}
            {status === 'success' && company && <Text size="sm" c="dimmed">Showing local results for <b>{company.name}</b>.</Text>}
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={24}>
              <StatCard
                label="Your Water Sources"
                value="50+"
                support="Major rivers, reservoirs and underground aquifers across the UK"
              />
              <StatCard
                label={isBusiness ? 'Claim Up To' : 'Save Up To'}
                value={isBusiness ? '£3,000' : '£700'}
                support={isBusiness ? 'Support per site for proven water savings' : 'A year from water-saving actions and fixing leaks'}
                footer={
                  <SegmentedControl
                    mt="auto"
                    size="xs"
                    fullWidth
                    value={isBusiness ? 'Business' : 'House'}
                    onChange={(v) => app.setAudienceType(v === 'Business' ? 'business' : 'home')}
                    data={['House', 'Business']}
                  />
                }
              />
              <StatCard
                label="Water companies investing"
                value="£104bn"
                support="In water saving activities 2025–30"
              />
            </SimpleGrid>
            <Stack gap={16} mt={48} maw={760}>
              <Title order={3}>Everyone has a part to play</Title>
              <Text>The water industry is already acting. Water companies are investing billions to fix leaks, upgrade infrastructure and increase supply. That tackles around two thirds of the projected shortfall.</Text>
              <Text fw={700}>That&apos;s where we all come in</Text>
              <Text>The final third can&apos;t be built. It has to come from all of us. The small, everyday choices made in homes and workplaces across England will help close that shortfall.</Text>
              <Text>Collective action is at the heart of this. No single effort solves it. But lots of small ones, taken together, add up to real change.</Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5 }}>
          <WireframeMap mode="rivers" value={companyId} onChange={handleMapSelect} focusKey={focusKey} height={460} hideSelector />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
