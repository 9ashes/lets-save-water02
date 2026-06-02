// src/WireframeMap.jsx
// CUSTOM COMPONENT (approved in plan): a zoomable, stylised wireframe map of
// the UK. Mantine has no map / geo primitive, so the SVG canvas + zoom/pan is
// bespoke; everything around it (Select, ActionIcon zoom controls, Paper frame,
// Badge) is composed from Mantine. Geometry is simplified/made-up and clearly
// labelled prototype-only. See /docs/custom-components-log.md.
import React from 'react';
import { Box, Paper, Select, ActionIcon, Stack, Group, Text } from '@mantine/core';
import { IconPlus, IconMinus, IconFocusCentered, IconMapPin } from '@tabler/icons-react';
import { WATER_COMPANIES } from './data.js';

const VBW = 300;
const VBH = 420;

// Simplified Great Britain silhouette (NOT accurate — wireframe only).
const GB_OUTLINE =
  'M150,18 C168,30 168,60 158,82 C176,96 182,120 184,150 C214,170 240,200 240,232 ' +
  'C240,256 214,258 210,282 C228,300 224,322 200,330 C176,340 150,344 126,352 ' +
  'C100,366 78,386 62,398 C58,402 64,396 74,388 C100,372 120,366 122,352 ' +
  'C112,338 96,332 92,312 C84,292 100,280 96,258 C92,236 78,232 80,210 ' +
  'C84,186 98,172 90,150 C84,128 104,124 100,104 C96,84 116,82 116,60 ' +
  'C116,40 134,30 150,18 Z';

// Faint Ireland blob (non-interactive, for context).
const IRELAND = 'M30,235 C20,210 34,188 52,190 C70,192 74,214 66,236 C60,258 40,262 30,235 Z';

// Clickable regions. company maps to WATER_COMPANIES; scotland has none.
const REGIONS = [
  { id: 'scotland', company: null, label: 'Scotland', focusKey: 'scotland',
    points: '116,30 158,40 168,90 120,96 100,70' },
  { id: 'northwest', company: 'united', label: 'North West', focusKey: 'northwest',
    points: '90,150 122,150 126,206 92,210' },
  { id: 'yorkshire', company: 'yorkshire', label: 'Yorkshire', focusKey: 'yorkshire',
    points: '124,150 182,156 184,206 128,206' },
  { id: 'midlands', company: 'severn', label: 'Midlands', focusKey: 'midlands',
    points: '94,210 184,210 186,258 98,256' },
  { id: 'east', company: 'anglian', label: 'East of England', focusKey: 'east',
    points: '186,158 238,206 214,266 188,256' },
  { id: 'thames', company: 'thames', label: 'Greater London', focusKey: 'london',
    points: '188,260 224,284 206,322 188,298' },
  { id: 'southwest', company: 'southwest', label: 'South West', focusKey: 'southwest',
    points: '70,316 126,328 104,380 64,394' },
];

// Mock river polylines (rivers mode).
const RIVERS = [
  { id: 'thames', d: 'M206,300 C188,302 168,300 150,308 C140,312 130,310 120,316' },
  { id: 'severn', d: 'M132,300 C126,272 118,250 112,224 C110,212 108,204 104,196' },
  { id: 'mersey', d: 'M112,206 C102,202 96,198 86,196' },
  { id: 'aire', d: 'M168,178 C156,184 146,184 134,190' },
  { id: 'ouse', d: 'M214,232 C204,242 196,246 188,256' },
  { id: 'exe', d: 'M100,344 C96,356 92,366 88,378' },
];

function centroid(points) {
  const pts = points.split(' ').map((p) => p.split(',').map(Number));
  const n = pts.length;
  const cx = pts.reduce((s, p) => s + p[0], 0) / n;
  const cy = pts.reduce((s, p) => s + p[1], 0) / n;
  return [cx, cy];
}

const FOCUS_SCALE = 2.6;

export function WireframeMap({
  mode = 'rivers', // 'rivers' | 'boundaries'
  value = null, // selected company id
  onChange, // (companyId) => void
  focusKey = null, // region focusKey to zoom to (e.g. 'london')
  height = 360,
  hideSelector = false,
}) {
  const [view, setView] = React.useState({ scale: 1, tx: 0, ty: 0 });
  const svgRef = React.useRef(null);
  const drag = React.useRef(null);

  // Zoom to a focus region when focusKey changes.
  React.useEffect(() => {
    if (!focusKey) return;
    const region = REGIONS.find((r) => r.focusKey === focusKey);
    if (!region) return;
    const [cx, cy] = centroid(region.points);
    const s = FOCUS_SCALE;
    setView({ scale: s, tx: VBW / 2 - s * cx, ty: VBH / 2 - s * cy });
  }, [focusKey]);

  const centerPoint = () => ({
    x: (VBW / 2 - view.tx) / view.scale,
    y: (VBH / 2 - view.ty) / view.scale,
  });

  const zoomBy = (factor) => {
    const c = centerPoint();
    const s = Math.min(6, Math.max(1, view.scale * factor));
    setView({ scale: s, tx: VBW / 2 - s * c.x, ty: VBH / 2 - s * c.y });
  };

  const reset = () => setView({ scale: 1, tx: 0, ty: 0 });

  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const ratioX = VBW / rect.width;
    const ratioY = VBH / rect.height;
    setView((v) => ({
      ...v,
      tx: drag.current.tx + (e.clientX - drag.current.x) * ratioX,
      ty: drag.current.ty + (e.clientY - drag.current.y) * ratioY,
    }));
  };
  const onPointerUp = () => { drag.current = null; };

  const selectData = Object.values(WATER_COMPANIES).map((c) => ({ value: c.id, label: c.name }));
  const transform = `translate(${view.tx} ${view.ty}) scale(${view.scale})`;

  const blue = 'var(--mantine-color-blue-6)';
  const line = 'var(--mantine-color-gray-5)';
  const land = 'var(--mantine-color-gray-1)';

  return (
    <Paper withBorder radius="sm" style={{ overflow: 'hidden', position: 'relative', height }}>
      {/* Top-left water company selector */}
      {!hideSelector && (
        <Box style={{ position: 'absolute', top: 10, left: 10, zIndex: 3, width: 200, maxWidth: 'calc(100% - 20px)' }}>
          <Select
            size="xs"
            radius="sm"
            placeholder="Water company"
            leftSection={<IconMapPin size={14} />}
            data={selectData}
            value={value}
            onChange={(v) => onChange && onChange(v)}
            comboboxProps={{ withinPortal: true, zIndex: 350 }}
            aria-label="Select a water company"
          />
        </Box>
      )}

      {/* Zoom controls */}
      <Stack gap={4} style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 3 }}>
        <ActionIcon variant="default" size="md" onClick={() => zoomBy(1.4)} aria-label="Zoom in">
          <IconPlus size={16} />
        </ActionIcon>
        <ActionIcon variant="default" size="md" onClick={() => zoomBy(1 / 1.4)} aria-label="Zoom out">
          <IconMinus size={16} />
        </ActionIcon>
        <ActionIcon variant="default" size="md" onClick={reset} aria-label="Reset view">
          <IconFocusCentered size={16} />
        </ActionIcon>
      </Stack>

      {/* Prototype-only caption */}
      <Box style={{ position: 'absolute', bottom: 8, left: 10, zIndex: 3 }}>
        <Text fz={10} c="dimmed">Illustrative map — prototype only</Text>
      </Box>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${VBW} ${VBH}`}
        width="100%"
        height="100%"
        style={{ display: 'block', touchAction: 'none', cursor: drag.current ? 'grabbing' : 'grab', background: 'var(--mantine-color-gray-0)' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="group"
        aria-label="Zoomable wireframe map of the UK"
      >
        {/* faint grid (fixed, behind transform) */}
        <defs>
          <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0 H0 V24" fill="none" stroke="var(--mantine-color-gray-2)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width={VBW} height={VBH} fill="url(#map-grid)" />

        <g transform={transform}>
          <path d={IRELAND} fill="var(--mantine-color-gray-1)" stroke={line} strokeWidth="1" opacity="0.6" />
          <path d={GB_OUTLINE} fill={land} stroke={line} strokeWidth="1.25" />

          {/* Region hit-areas / boundaries */}
          {REGIONS.map((r) => {
            const interactive = !!r.company;
            const selected = value && r.company === value;
            const showFill = mode === 'boundaries';
            return (
              <polygon
                key={r.id}
                points={r.points}
                onClick={(e) => { e.stopPropagation(); if (interactive && onChange) onChange(r.company); }}
                style={{ cursor: interactive ? 'pointer' : 'default' }}
                fill={
                  selected
                    ? 'var(--mantine-color-blue-2)'
                    : showFill && interactive
                    ? 'var(--mantine-color-gray-2)'
                    : 'transparent'
                }
                fillOpacity={selected ? 0.85 : showFill ? 0.7 : 0}
                stroke={
                  selected
                    ? blue
                    : showFill && interactive
                    ? 'var(--mantine-color-gray-5)'
                    : 'transparent'
                }
                strokeWidth={selected ? 1.75 : 1}
              />
            );
          })}

          {/* Rivers */}
          {mode === 'rivers' &&
            RIVERS.map((r) => (
              <path key={r.id} d={r.d} fill="none" stroke={blue} strokeWidth={1.6 / 1} strokeLinecap="round" opacity="0.9" />
            ))}
        </g>
      </svg>
    </Paper>
  );
}
