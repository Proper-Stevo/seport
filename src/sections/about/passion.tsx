"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
// import desktop from '../../../public/assets/passion.png';

const Passion: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 4, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        gap: 4
                    }}
                >
                    {/* Text section - left side (50%) */}
                    <Box sx={{ flex: '1 1 50%' }}>
                        <Typography variant="h6" color='black'>
                            Explore
                        </Typography>
                        <Typography variant="h3" color='black'>
                            A Glimpse into My Passion for Tech
                        </Typography>
                        <Typography variant="body1" color='black'>
                            When I'm not coding, I enjoy diving into the latest technologies and honing my skills. My curiosity drives me to explore new tools and frameworks, ensuring that I stay ahead in this ever-evolving field.
                        </Typography>
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
                            {/* <Image 
                // src={desktop} 
                alt="Passion Image" 
                fill
                style={{ objectFit: 'cover' }} 
              /> */}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
export default Passion;