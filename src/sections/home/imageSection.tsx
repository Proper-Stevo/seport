"use client";
import * as React from 'react';
import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import Selfie from "../../../public/assets/portrait.png"; // Adjust the path as necessary

export default function ImageSection() {
    return (
        <Box sx={{ mb: 4, mt: 4, pb: 4 }}>
            <Box 
                sx={{ 
                    width: '100%', 
                    height: '500px', 
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 2
                }}
            >
                {/* Image background */}
                <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
                    <Image 
                        src={Selfie}
                        alt="Steven Barrios"
                        fill
                        style={{ objectFit: 'fill' }}
                        priority
                    />
                </Box>
                
                {/* Semi-transparent overlay to improve text readability */}
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                        zIndex: 1 
                    }} 
                />
                
                {/* Text overlay */}
                <Box 
                    sx={{ 
                        position: 'relative', 
                        zIndex: 2, 
                        textAlign: 'left',
                        p: 4,
                        color: 'white'
                    }}
                >
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Steven Barrios
                    </Typography>
                </Box>
                <Box 
                    sx={{ 
                        position: 'relative', 
                        zIndex: 2, 
                        textAlign: 'right',
                        p: 4,
                        color: 'white'
                    }}
                >
                    
                    <Typography variant="h5" sx={{ maxWidth: '600px', mx: 'auto' }}>
                        Full Stack Developer with a passion for creating elegant, efficient, and user-friendly applications.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}