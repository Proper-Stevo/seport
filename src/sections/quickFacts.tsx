"use client";
import * as React from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Stack,
    Divider,
} from "@mui/material";
import Image from 'next/image';
import CellPhone from "../../public/assets/CellPhone.png";
import Portrait from "../../public/assets/Portrait.png";
import { Diversity1 } from '@mui/icons-material';

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function QuickFacts() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginTop: 10, backgroundColor: '#F4F4F4', borderRadius: 2, padding: 2 }}>
            {/* Tabs Section */}
            <Divider   sx={{ 
            height: 3, 
            backgroundColor: "black",
            opacity: 1
          }} />
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="inherit"
                sx={{ color: 'black' }}
            >
                <Tab label="About" {...a11yProps(0)} />
                <Tab label="Read More" {...a11yProps(1)} />
            </Tabs>

            {/* Three separate stacks without Paper components */}
            <Box sx={{ mt: 4, mb: 2, width: "100%" }}>

                {/* Container for the three stacks */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 2,
                    width: "100%"
                }}>
                    {/* First Stack */}
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            justifyContent: "space-between"
                        }}
                    >
                        <Box sx={{ p: 2, borderRadius: 1 }}>
                            <Typography variant="body1">Hi, I’m Steven Barrios – a Full Stack Developer specializing in building high-performance web applications. With expertise in React, Next.js, and the MERN stack, I create clean, responsive, and user-friendly digital solutions.</Typography>
                        </Box>
                        <Box sx={{ p: 2, borderRadius: 1 }}>
                            <Typography variant="body1">I believe in building web applications that are not just functional but also intuitive and visually compelling. Every project is an opportunity to create seamless user experiences that leave a lasting impact. <br /><br /> Speed, efficiency, and scalability are at the core of my development process. Whether it’s a startup MVP or a complex web platform, I ensure that the architecture is optimized for growth and high performance.</Typography>


                        </Box>
                        <Box sx={{ p: 2, borderRadius: 1 }}>
                            <Typography variant="body1">Great digital products are built through collaboration. I work closely with clients to understand their vision, turning ideas into reality through clean code, modern frameworks, and innovative solutions.</Typography>
                        </Box>
                    </Stack>

                    {/* Second Stack */}
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            justifyContent: "space-between"
                        }}
                    >
                        <Box sx={{ p: 2, borderRadius: 1 }}>
                            <Image
                                alt="head shot"
                                src={CellPhone.src}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                                width={500}
                                height={500}
                            />                        </Box>
                        <Box sx={{ p: 2, borderRadius: 1 }}>
                            <Typography variant="body1"></Typography>
                        </Box>
                        <Box sx={{ p: 2, borderRadius: 1, display: 'flex' }}>
                            <Image
                                alt="head shot"
                                src={Portrait.src}
                                style={{
                                    width: "90%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                                width={500}
                                height={500}
                            />
                        </Box>
                    </Stack>

                    {/* Third Stack */}
                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{
                            justifyContent: "flex-end"
                        }}
                    >
                        <Box sx={{ p: 2, borderRadius: 1, width: '30%', display: "flex", alignItems: "start" }}>
                            <Typography component="p" sx={{ marginRight: 2, fontSize: "200px", color: "#A28664"}}>4</Typography>
                            <Typography variant="h3" component="p">years of building scalable & high-performance web apps.</Typography>
                        </Box>
                        <Box sx={{ p: 2, borderRadius: 1, width: '30%' }}>
                            <Typography variant="body1">With a passion for clean code and intuitive design, I have built web applications that not only function seamlessly but also provide exceptional user experiences.
                                <br />
                                <br />My expertise in front-end and back-end development ensures that every project is efficient, scalable, and ready for growth.</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}