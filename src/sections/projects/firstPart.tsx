"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Introduction: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', backgroundColor: '#F4F4F4' }}>
              <Container
                maxWidth="lg"
                sx={{
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: { xs: 2, md: 60 }
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  color="black"
                  gutterBottom
                  sx={{ fontWeight: 'medium', mb: 3 }}
                >
                  Projects
                </Typography>

                <Typography variant="body1" color="black">
                  Here are some web applications I've built - each designed with performance, usability, and aesthetics in mind. From productivity tools to dynamic restaurant platforms, these projects reflect my focus on clean code and intuitive user experiences. I invite you to explore these applications, each a testament to my commitment to quality and innovation in web development.
                </Typography>
              </Container>
           </Box>
    );
}

export default Introduction;