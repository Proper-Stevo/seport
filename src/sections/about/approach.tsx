"use client"
import React from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import iPhone from '../../../public/assets/iphone.png';
import NextLink from 'next/link';

const Approach: React.FC = () => {

    return (
        <Box sx={{ width: '100%', backgroundColor: '#F4F4F4', py: 4 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        gap: 4,
                    }}
                >
                    {/* Text section - left side (50%) */}
                    <Box sx={{ flex: '1 1 50%' }}>
                        <Typography variant="h4" color='black'>
                            My Development Approach:
                        </Typography>
                        <Typography variant="h5" color='black' sx={{ mt: 2 }}>
                            Clarity and Collaboration
                        </Typography>
                        <Typography variant="body1" color='black'>
                            I prioritize performance, usability, and clean code in every project. My goal is to create solutions
                            that not only meet client needs but also enhance user experience. I believe in clear communication and collaboration, ensuring that every project is a true partnership.
                        </Typography>


                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" color='black' sx={{ mt: 0 }}>
                                    Core Values:
                                </Typography>
                                <Typography variant="body1" color='black'>
                                    I believe in clear communication and meticulous attention to detail throughout the development process.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        mt: 2,
                                        borderRadius: '999px',
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        border: '2px solid',
                                        borderColor: 'primary.main',
                                    }}
                                    component={NextLink}
                                    href="/contact"
                                >
                                    Lets Work Together
                                </Button>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" color='black' sx={{ mt: 0 }}>
                                    Friendly Collaboration:
                                </Typography>
                                <Typography variant="body1" color='black'>
                                    I work closely with clients to ensure their vision is realized effectively.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Photo section - right side (50%) */}
                    <Box
                        sx={{
                            flex: '1 1 50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '300px',
                                aspectRatio: '1',
                                borderRadius: '8px',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                src={iPhone}
                                alt="Approach Image"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Approach;
