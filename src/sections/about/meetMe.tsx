"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const SimpleAboutMe: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ width: '100%', backgroundColor: '#F4F4F4' }}>
        <Container maxWidth="lg" sx={{ padding: '2rem' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          color='black'
          gutterBottom
          sx={{ fontWeight: 'medium', mb: 3 }}
        >
          Meet Steven Barrios
        </Typography>
        
        <Typography variant="body1" color='black'>
         Salutations and welcome to my portfolio! I am Steven Barrios, a passionate software engineer with a focus on web development. My journey in technology has been driven by a deep curiosity and a desire to create impactful solutions. I thrive on challenges and continuously seek opportunities to learn and grow in this ever-evolving field.
        </Typography>
        <Typography variant="body1" color='black'>
         With 4+ years of experience in the industry, I have honed my skills in various programming languages and frameworks. I am particularly drawn to front-end development, where I can bring ideas to life through intuitive user interfaces and seamless user experiences. My goal is to leverage technology to solve real-world problems and make a positive impact on people's lives.
        </Typography>
        </Container>
    </Box>
  );
};

export default SimpleAboutMe;