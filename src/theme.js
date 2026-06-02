// src/theme.js
import { createTheme } from '@mantine/core';

export const HEADER_HEIGHT = 64;

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 6,
  defaultRadius: 'sm',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '700',
  },
  components: {
    Card: { defaultProps: { withBorder: true, radius: 'sm' } },
    Paper: { defaultProps: { radius: 'sm' } },
    Modal: { defaultProps: { transitionProps: { duration: 0 } } },
    Drawer: { defaultProps: { transitionProps: { duration: 0 } } },
    Menu: { defaultProps: { transitionProps: { duration: 0 } } },
    Popover: { defaultProps: { transitionProps: { duration: 0 } } },
    Tooltip: { defaultProps: { transitionProps: { duration: 0 } } },
  },
});
