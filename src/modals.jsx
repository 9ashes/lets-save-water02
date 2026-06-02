// src/modals.jsx
import React from 'react';
import { Modal, Stack, Group, Button, Text, ThemeIcon } from '@mantine/core';
import { IconBrandGmail, IconMail, IconBrandWindows, IconShare3, IconPrinter, IconUsers } from '@tabler/icons-react';
import { openMailProvider } from './lib.jsx';

const PRESS_TO = 'press@example.com';
const PRESS_SUBJECT = "Press pack request — Let’s save water";
const PRESS_BODY = "Hello,\n\nPlease could you send me the Let’s save water press pack.\n\nThank you.";

export function PressPackModal({ opened, onClose }) {
  const providers = [
    { id: 'gmail', label: 'Gmail', icon: <IconBrandGmail size={18} /> },
    { id: 'yahoo', label: 'Yahoo Mail', icon: <IconMail size={18} /> },
    { id: 'outlook', label: 'Hotmail / Outlook', icon: <IconBrandWindows size={18} /> },
  ];
  return (
    <Modal opened={opened} onClose={onClose} title="Request press pack" centered radius="sm">
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          How would you like to request the press pack? We&apos;ll open a pre-filled message.
        </Text>
        <Stack gap="xs">
          {providers.map((p) => (
            <Button key={p.id} variant="default" justify="flex-start" leftSection={p.icon}
              onClick={() => { openMailProvider(p.id, { to: PRESS_TO, subject: PRESS_SUBJECT, body: PRESS_BODY }); onClose(); }}>
              {p.label}
            </Button>
          ))}
        </Stack>
        <Text size="xs" c="dimmed">Opens your chosen email provider in a new tab, with a mailto fallback.</Text>
      </Stack>
    </Modal>
  );
}

const SHARE_TO = '';
const SHARE_SUBJECT = "A water-saving action from Let’s save water";
const SHARE_BODY = 'I thought you might find this water-saving action useful: [link placeholder]';

export function ShareModal({ opened, onClose, action }) {
  const options = [
    { id: 'social', label: 'Social', icon: <IconUsers size={18} />, onClick: () => { window.alert('Social sharing will open here.'); onClose(); } },
    { id: 'email', label: 'Email', icon: <IconMail size={18} />, onClick: () => { window.location.href = `mailto:${SHARE_TO}?subject=${encodeURIComponent(SHARE_SUBJECT)}&body=${encodeURIComponent(SHARE_BODY)}`; onClose(); } },
    { id: 'print', label: 'Printout', icon: <IconPrinter size={18} />, onClick: () => { onClose(); setTimeout(() => window.print(), 150); } },
  ];
  return (
    <Modal opened={opened} onClose={onClose} centered radius="sm"
      title={<Group gap="xs"><ThemeIcon variant="light" color="gray" size="sm"><IconShare3 size={14} /></ThemeIcon><Text fw={600}>Share this action</Text></Group>}>
      <Stack gap="md">
        <Text size="sm" c="dimmed">How would you like to share this practical action?</Text>
        <Stack gap="xs">
          {options.map((o) => (
            <Button key={o.id} variant="default" justify="flex-start" leftSection={o.icon} onClick={o.onClick}>{o.label}</Button>
          ))}
        </Stack>
      </Stack>
    </Modal>
  );
}
