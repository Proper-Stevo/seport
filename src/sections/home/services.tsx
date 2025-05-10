"use client";
import * as React from 'react';
import { Box, Typography, Divider } from "@mui/material";

// Simplified TabPanel interface since it's not used in this component
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

const ArrowRight = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: '8px' }}
    >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Services() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
        <Box sx={{ mb: 4, mt: 4, pb: 4 }}>
        <Box sx={{ width: '100%', marginTop: 10, backgroundColor: '#F4F4F4', padding: 2 }}>
            <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 4 }}>
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
                <Box sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 3,
                    mt: 2,
                    color: (theme) => theme.palette.secondary.main
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowRight />
                        <Typography color="inherit">Full Stack Developer</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowRight />
                        <Typography color="inherit">Custom Web Applications</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowRight />
                        <Typography color="inherit">API Development & Integration</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowRight />
                        <Typography color="inherit">UI/UX Optimization</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    );
}