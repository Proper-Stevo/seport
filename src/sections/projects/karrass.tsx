"use client";
import React from 'react';
import { Box, Container, Typography, useTheme, Paper, Grid } from '@mui/material';
import DesktopKarrass from '../../../public/assets/DesktopKarrass.png';

const Karrass: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', backgroundColor: 'white' }}>
            <Container
                maxWidth="lg"
                sx={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Box
                    sx={{
                        width: '100%',
                        height: '900px',
                        backgroundImage: `url(${DesktopKarrass.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                        boxShadow: theme.shadows[3],
                    }}
                />
                <Box sx={{ backgroundColor: 'white', padding: '2rem' }}>
                    <Grid container spacing={4} alignItems="flex-start">
                        {/* Left Side */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h4"
                                component="h1"
                                color="black"
                                gutterBottom
                                sx={{ fontWeight: 'medium', mb: 2 }}
                            >
                                Website
                            </Typography>

                            {/* Tech boxes */}
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                {['React', 'TypeScript', 'Next.js', 'Tailwind.CSS', 'GraphQL'].map((tech) => (
                                    <Paper
                                        key={tech}
                                        elevation={3}
                                        sx={{
                                            padding: '0.5rem 1rem',
                                            backgroundColor: '#F4F4F4',
                                            color: 'black',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech}
                                    </Paper>
                                ))}
                            </Box>
                        </Grid>

                        {/* Right Side */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" color="black">
                                I revamped KARRASS company website using Next.js, Tailwind CSS, and various modern React libraries for a dynamic and responsive user experience. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Karrass;