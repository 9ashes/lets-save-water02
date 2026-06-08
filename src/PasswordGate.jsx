import React from 'react';
import { Box, Stack, Paper, Title, Text, PasswordInput, Button, Center, Checkbox, Group } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

const GATE_PASSWORD = 'Qm4lB5^kE!z#YV'; // Change this to your desired password

export function PasswordGate({ children, onUnlock }) {
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [showPrivacyModal, setShowPrivacyModal] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === GATE_PASSWORD) {
      setIsUnlocked(true);
      setError('');
      if (onUnlock) {
        onUnlock(showPrivacyModal);
      }
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isUnlocked) {
    return children;
  }

  return (
    <Box
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Paper
        withBorder
        radius="lg"
        p={40}
        style={{
          width: '100%',
          maxWidth: 420,
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <Stack gap="lg">
          <Center>
            <Box
              style={{
                width: 56,
                height: 56,
                borderRadius: 'var(--mantine-radius-md)',
                background: 'var(--mantine-color-blue-0)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconLock size={28} color="var(--mantine-color-blue-6)" />
            </Box>
          </Center>

          <Stack gap={0} align="center">
            <Title order={2} align="center">
              Access Required
            </Title>
            <Text size="sm" c="dimmed" align="center" mt="xs">
              This preview is password protected. Please enter the password to continue.
            </Text>
          </Stack>

          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <PasswordInput
                label="Password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                  setError('');
                }}
                error={error}
                autoFocus
              />
              <Checkbox
                label="Show privacy policy on entry"
                checked={showPrivacyModal}
                onChange={(e) => setShowPrivacyModal(e.currentTarget.checked)}
                defaultChecked
              />
              <Button type="submit" fullWidth>
                Unlock
              </Button>
            </Stack>
          </form>

          <Text size="xs" c="dimmed" align="center">
            Let's Save Water Preview
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
}
