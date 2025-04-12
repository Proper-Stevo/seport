import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Hero from '@/sections/hero';
import QuickFacts from '@/sections/quickFacts';
import Projects from '@/sections/projects';
import Services from '@/sections/services';
import ImageSection from '@/sections/imageSection';


export default function Home() {
  return (
    <Box className="app-background">
      <Hero />
      <QuickFacts />
      <Projects />
      <Services />
      <ImageSection />
    </Box>
  );
}