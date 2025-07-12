"use client";
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Desktop from '../../../public/assets/desktop.png';

const Collab: React.FC = () => {
    return (
        <Box
            sx={{
                py: 8,
                backgroundImage: `url(${Desktop.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        maxWidth: 600,
                        mx: { xs: 'auto', md: 0 },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >

                    <Typography variant="h4" color='white'>
                        Let's Connect and Collaborate
                    </Typography>
                    <Typography variant="body1" color='white'>
                        I'm here to help you bring your ideas to life. Let's discuss your next project!
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, mt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                borderRadius: '999px',
                                backgroundColor: 'primary.main',
                                color: 'white',
                                border: '2px solid',
                                borderColor: 'primary.main',
                                px: 4,
                            }}
                            href="/contact"
                        >
                            Contact
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '999px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                px: 4,
                            }}
                            href="/inquire"
                        >
                            Inquire
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Collab;
