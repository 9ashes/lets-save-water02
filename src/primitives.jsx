// src/primitives.jsx
import React from 'react';
import { Box, Card, Stack, Text } from '@mantine/core';

export function WireframeImage({ height = 240, radius = 'sm', label, style, ...rest }) {
  const line = 'var(--mantine-color-gray-4)';
  return (
    <Box
      role="img"
      aria-label={label || 'Image placeholder'}
      style={{
        height,
        width: '100%',
        border: '1px solid var(--mantine-color-gray-4)',
        borderRadius: `var(--mantine-radius-${radius})`,
        backgroundColor: 'var(--mantine-color-gray-0)',
        backgroundImage: `linear-gradient(to top right, transparent calc(50% - 0.75px), ${line} calc(50% - 0.75px), ${line} calc(50% + 0.75px), transparent calc(50% + 0.75px)), linear-gradient(to top left, transparent calc(50% - 0.75px), ${line} calc(50% - 0.75px), ${line} calc(50% + 0.75px), transparent calc(50% + 0.75px))`,
        ...style,
      }}
      {...rest}
    />
  );
}

export function StatCard({ label, value, support, graphic = null, footer = null, emptyText = null, size = 'sm' }) {
  const big = size === 'lg';
  return (
    <Card padding={big ? 'lg' : 'md'} radius="sm" h="100%">
      <Stack gap={big ? 'sm' : 'xs'} h="100%">
        {label && (
          <Text fw={600} c="dimmed" tt="none" fz={big ? 'md' : 'sm'} style={{ lineHeight: 1.3 }}>
            {label}
          </Text>
        )}
        {graphic}
        {value ? (
          <Text fw={700} style={{ fontSize: big ? '2.75rem' : 'var(--mantine-h2-font-size)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            {value}
          </Text>
        ) : emptyText ? (
          <Text c="dimmed" fz={big ? 'md' : 'sm'} fs="italic">{emptyText}</Text>
        ) : null}
        {support && <Text c="dimmed" fz={big ? 'md' : 'sm'} style={{ marginTop: 'auto' }}>{support}</Text>}
        {footer}
      </Stack>
    </Card>
  );
}
