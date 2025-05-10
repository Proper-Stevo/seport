import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Hero from '@/sections/home/hero';
import QuickFacts from '@/sections/home/quickFacts';
import Projects from '@/sections/home/projects';
import Services from '@/sections/home/services';
import ImageSection from '@/sections/home/imageSection';
import FaqSection from '@/sections/home/faq';
import Contact from '@/sections/home/contact';


export default function Home() {
  return (
    <Box className="app-background">
      <Hero />
      <QuickFacts />
      <Projects />
      <Services />
      <ImageSection />
      <FaqSection />
      <Contact />
    </Box>
  );
}