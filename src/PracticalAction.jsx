import React from 'react';
import { Grid, Stack, Group, Box, Title, Text, ThemeIcon, Badge, ActionIcon, Menu, Modal, Button } from '@mantine/core';
import { IconBath, IconDroplet, IconBucket, IconWash, IconWashMachine, IconToiletPaper, IconShare3, IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconMail, IconBrandGmail, IconBrandWindows } from '@tabler/icons-react';
import { WireframeImage } from './primitives.jsx';
import { openMailProvider } from './lib.jsx';

const ICONS = { shower: IconBath, droplet: IconDroplet, bucket: IconBucket, wash: IconWash, machine: IconWashMachine, toilet: IconToiletPaper };

function ActionStep({ step }) {
  const Icon = ICONS[step.icon || 'droplet'];

  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon variant="light" color="blue" radius="md" size={36}>
        <Icon size={18} />
      </ThemeIcon>
      <Box>
        <Text fw={700}>{step.title}</Text>
        <Text size="sm" c="dimmed" mt="xs">{step.supporting}</Text>
      </Box>
    </Group>
  );
}

export function PracticalActionsGrid({ groups, indexOffset = 0 }) {
  const shareMessage = "Let's save water together. Here's what I'm doing.";
  const shareUrl = window.location.href;
  const [emailModalOpened, setEmailModalOpened] = React.useState(false);

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, 'facebook-share', 'width=600,height=400');
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`, 'twitter-share', 'width=600,height=400');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, 'linkedin-share', 'width=600,height=400');
  };

  const handleEmailProvider = (provider) => {
    const subject = "Let's Save Water - Join Me!";
    const body = `${shareMessage}\n\nCheck it out: ${shareUrl}`;
    openMailProvider(provider, { to: '', subject, body });
    setEmailModalOpened(false);
  };

  const emailProviders = [
    { id: 'gmail', label: 'Gmail', icon: <IconBrandGmail size={18} /> },
    { id: 'yahoo', label: 'Yahoo Mail', icon: <IconMail size={18} /> },
    { id: 'outlook', label: 'Hotmail / Outlook', icon: <IconBrandWindows size={18} /> },
  ];

  return (
    <>
      <Modal opened={emailModalOpened} onClose={() => setEmailModalOpened(false)} title="Share via Email" centered radius="sm">
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            Which email provider would you like to use?
          </Text>
          <Stack gap="xs">
            {emailProviders.map((p) => (
              <Button key={p.id} variant="default" justify="flex-start" leftSection={p.icon}
                onClick={() => handleEmailProvider(p.id)}>
                {p.label}
              </Button>
            ))}
          </Stack>
          <Text size="xs" c="dimmed">Opens your chosen email provider in a new tab, with a mailto fallback.</Text>
        </Stack>
      </Modal>

      <Stack gap="xl">
        {groups.map((group, index) => {
          const effectiveIndex = index + indexOffset;

          return (
          <Grid key={group.id} gutter="xl" align="flex-start">
            <Grid.Col span={{ base: 12, sm: 5 }} order={{ base: 1, sm: effectiveIndex % 2 ? 2 : 1 }}>
              <WireframeImage height={260} label={group.title} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 7 }} order={{ base: 2, sm: effectiveIndex % 2 ? 1 : 2 }}>
              <Stack gap="lg" h="100%" justify="flex-start" pt={0}>
                <Group gap="sm" align="center">
                  <Title order={3}>{group.title}</Title>
                  <Menu shadow="md" position="bottom-end">
                    <Menu.Target>
                      <ActionIcon
                        variant="light"
                        color="gray"
                        radius="md"
                        title="Share this action"
                      >
                        <IconShare3 size={18} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<IconBrandFacebook size={16} />} onClick={handleShareFacebook}>
                        Share on Facebook
                      </Menu.Item>
                      <Menu.Item leftSection={<IconBrandTwitter size={16} />} onClick={handleShareTwitter}>
                        Share on Twitter
                      </Menu.Item>
                      <Menu.Item leftSection={<IconBrandLinkedin size={16} />} onClick={handleShareLinkedIn}>
                        Share on LinkedIn
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item leftSection={<IconMail size={16} />} onClick={() => setEmailModalOpened(true)}>
                        Share via Email
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  {group.badge && <Badge variant="light" radius="sm">{group.badge}</Badge>}
                </Group>
              <Stack gap="xl">
                {group.steps.map((step) => <ActionStep key={step.id} step={step} />)}
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
          );
        })}
      </Stack>
    </>
  );
}
