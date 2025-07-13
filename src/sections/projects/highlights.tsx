"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Highlights: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Container maxWidth="lg" sx={{ padding: '2rem', flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                <Typography 
                    variant="h4" 
                    component="h1" 
                    color='black'
                    gutterBottom
                    sx={{ fontWeight: 'medium', mb: 3 }}
                >
                    Project Highlights
                </Typography>
                
                <Typography variant="body1" color='black'>
                    Here are some of the key highlights from my recent projects, showcasing my skills in web development and my commitment to delivering high-quality applications.
                </Typography>
            </Container>
        </Box>
    );
}
export default Highlights;