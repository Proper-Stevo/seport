import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import AboutMeSection from '@/sections/about/meetMe';
import Business from '@/sections/about/business';
import Approach from '@/sections/about/approach';
import Passion from '@/sections/about/passion';
import Collab from '@/sections/about/collab';
import Connect from '@/sections/about/connect';

export default function About() {
  return (
    <Box
    >
      <AboutMeSection />
      <Business />
      <Approach />
      <Passion />
      <Collab />
      <Connect />
    </Box>
  );
}
