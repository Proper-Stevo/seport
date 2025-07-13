import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import Introduction from '@/sections/projects/firstPart';
import Highlights from '@/sections/projects/highlights';
import Karrass from '@/sections/projects/karrass';
import Restaurant from '@/sections/projects/scwl';
import ProjectConnect from '@/sections/projects/projectConnect';

export default function About() {
  return (
    <Box
    >
      <Introduction />
      <Highlights />
      <Karrass />
      <Restaurant />
      <ProjectConnect />
    </Box>
  );
}
