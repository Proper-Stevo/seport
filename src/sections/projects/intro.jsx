"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Intro: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                padding: '2rem 0',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h4" align="center" gutterBottom>
                    Welcome to Our Projects Section
                </Typography>
                <Typography variant="body1" align="center">
                    Here you can explore our latest projects and initiatives.
                </Typography>
            </Container>
        </Box>
    );
}

export default Intro;