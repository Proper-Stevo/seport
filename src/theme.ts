'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0000FF',
        },
        secondary: {
          main: '#000000',
        },
        // background: {
        //   default: '#fdfdfd',
        // },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#D90000',
        },
        secondary: {
          main: '#FFFFFF',
        },
        // background: {
        //   default: '#1e1419',
        // },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.app-background': {
          backgroundImage: `url('/assets/pattern.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: 'calc(100vh - var(--navbar-height))', // Adjust for navbar height
          width: '100%',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
})

export default theme;
