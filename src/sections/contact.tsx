"use client";
import React, { useState } from 'react';
import {
    Typography,
    Accordion,
    Divider,
    AccordionSummary,
    AccordionDetails,
    Container,
    Box,
    Tab,
    Tabs,
    Theme,
    Paper,
    useTheme,
    ThemeProvider,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Contact: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const theme = useTheme();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [value, setValue] = React.useState(0);

    const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
    <Box sx={{ backgroundColor: '#E3E2DF', borderRadius: 2, padding: 2 }}>
      <Container maxWidth="md">
        <Box sx={{ my: 5 }}>
          <Box sx={{ width: '100%' }}>
            {/* First divider and tabs - kept exactly as provided */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Divider
                sx={{
                  height: 1,
                  opacity: 1,
                  mb: 1,
                  '&.MuiDivider-root': {
                    borderColor: 'black' // This will adapt to theme changes
                  }
                }}
              />
              <Tabs value={value} onChange={handleTabs} aria-label="basic tabs example" textColor="inherit"
                sx={{ color: 'black' }} indicatorColor='secondary'>
                <Tab label="Contact Details" {...a11yProps(0)} />
              </Tabs>
            </Box>
            
            {/* Modified second section with quote and Los Angeles tab side by side using Flexbox */}
            <Box 
              sx={{ 
                mt: 3,
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                width: '100%'
              }}
            >
              {/* Left side with quote */}
              <Box 
                sx={{ 
                  flex: '1 1 50%',
                  pr: { xs: 0, md: 3 },
                  pb: { xs: 3, md: 0 },
                  borderRight: { xs: 'none', md: '1px solid black' },
                  borderBottom: { xs: '1px solid black', md: 'none' },
                }}
              >
                <Box sx={{ position: 'relative', py: 2 }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: '2rem', 
                      color: theme.palette.secondary.main || '#f50057',
                      transform: 'rotate(180deg)',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      pl: 4, 
                      pr: 4, 
                      fontStyle: 'italic',
                      fontWeight: 'medium',
                      color: 'black',
                    }}
                  >
                    The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
                  </Typography>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: '2rem', 
                      color: theme.palette.secondary.main || '#f50057',
                      position: 'absolute',
                      bottom: 0,
                      right: 0
                    }} 
                  />
                </Box>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    textAlign: 'right', 
                    fontWeight: 'bold',
                    pr: 2,
                    mt: 1,
                    color: 'black',
                  }}
                >
                  — Steve Jobs
                </Typography>
              </Box>
              
              {/* Right side with Los Angeles tab */}
              <Box 
                sx={{ 
                  flex: '1 1 50%',
                  pl: { xs: 0, md: 3 },
                  pt: { xs: 3, md: 0 },
                }}
              >
                   <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    textAlign: 'right', 
                    fontWeight: 'bold',
                    pr: 2,
                    mt: 1,
                    color: 'black',
                    
                  }}
                >
                 LinkedIn
                </Typography>
                   <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    textAlign: 'right', 
                    fontWeight: 'bold',
                    pr: 2,
                    mt: 1,
                    color: 'black',
                  }}
                >
                 Resume
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Divider
                    sx={{
                      height: 1,
                      opacity: 1,
                      mb: 1,
                      '&.MuiDivider-root': {
                        borderColor: 'black'
                      }
                    }}
                  />
                  <Tabs value={value} onChange={handleTabs} aria-label="basic tabs example" textColor="inherit"
                    sx={{ color: 'black' }} indicatorColor='secondary'>
                    <Tab label="Los Angeles" {...a11yProps(0)} />
                  </Tabs>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
              {/* Additional help section */}
                    {/* <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Still have questions?
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Contact our support team at support@example.com or call us at 1-800-123-4567
                        </Typography>
                    </Box> */}
      </Container>
    </Box>
    );
}

export default Contact;