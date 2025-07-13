"use client";
import React, { useState } from 'react';
import {
    Typography,
    Divider,
    Container,
    Box,
    Tab,
    Tabs,
    useTheme,
    Grid,
} from '@mui/material';

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

const Projects: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();

    const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ backgroundColor: '#E3E2DF', borderRadius: 2, padding: 2 }}>
            <Container maxWidth="md">
                <Box sx={{ my: 5 }}>
                    <Box sx={{ width: '100%' }}>
                        {/* Tabs */}
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Divider
                                sx={{
                                    height: 1,
                                    opacity: 1,
                                    mb: 1,
                                    '&.MuiDivider-root': {
                                        borderColor: 'black',
                                    },
                                }}
                            />
                            <Tabs
                                value={value}
                                onChange={handleTabs}
                                aria-label="contact tabs"
                                textColor="inherit"
                                indicatorColor="secondary"
                                sx={{ color: 'black' }}
                            >
                                <Tab label="Contact" {...a11yProps(0)} />
                                <Tab label="Contact Details" {...a11yProps(1)} />
                            </Tabs>
                        </Box>

                        {/* TabPanel 0: Contact - Restored layout */}
                        <TabPanel value={value} index={0}>
                            <Box
                                sx={{
                                    mt: 3,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    width: '100%',
                                }}
                            >
                                {/* Left: Quote */}
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
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontStyle: 'italic',
                                                fontWeight: 'medium',
                                                color: 'black',
                                            }}
                                        >
                                            If you have a project in mind or need a developer who can
                                            bring your ideas to life, let's connect!
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Right: Links */}
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
                                </Box>
                            </Box>
                        </TabPanel>
                        {/* TabPanel 1: Contact Details */}
                        <TabPanel value={value} index={1}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, px: 2 }}>
                                {/* Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 120, color: 'black' }}>
                                        Email
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'black' }}>steven.barrios92@gmail.com</Typography>
                                </Box>

                                {/* Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 120, color: 'black' }}>
                                        Phone
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'black' }}>(323) 719-0378</Typography>
                                </Box>

                                {/* Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 120, color: 'black' }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'black' }}>Los Angeles, CA</Typography>
                                </Box>

                                {/* Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 120, color: 'black' }}>
                                        LinkedIn
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="https://linkedin.com/in/your-profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'underline', color: 'black' }}
                                    >
                                        View Profile
                                    </Typography>
                                </Box>

                                {/* Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ minWidth: 120, color: 'black' }}>
                                        Resume
                                    </Typography>
                                    <Typography
                                        component="a"
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'underline', color: 'black' }}
                                    >
                                        Download Resume
                                    </Typography>
                                </Box>
                            </Box>
                        </TabPanel>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
