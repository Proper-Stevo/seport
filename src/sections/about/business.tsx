"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import MacBook from '../../../public/assets/macBook.png';

const Business: React.FC = () => {
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
            <Typography variant="h4" color='black'>
              Core Services: Building Innovative Solutions for your Business
            </Typography>
            <Typography variant="body1" color='black'>
              I'm a passionate frontend developer with experience in React, TypeScript, and modern UI frameworks 
              like Material UI. I enjoy creating clean, responsive websites that provide great user experiences. 
              My background includes working on various web applications ranging from small business sites to 
              larger enterprise applications. When I'm not coding, I enjoy hiking, photography, and exploring 
              new coffee shops in my city. I'm constantly learning new technologies and techniques to improve 
              my craft and deliver better solutions.
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
              {/* Replace with your own image path */}
              <Image 
                src={MacBook} 
                alt="Profile Photo" 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Business