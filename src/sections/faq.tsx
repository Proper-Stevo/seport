"use client";
import React, { useState } from 'react';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    Box,
    Tab,
    Tabs,
    Paper,
    useTheme,
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ data structure
interface FaqItem {
    question: string;
    answer: string;
    expanded?: boolean;
}

// Sample FAQ data
const faqData: FaqItem[] = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing. Our team is skilled in various technologies to meet your needs."
    },
    {
        question: "Can you build a custom web application?",
        answer: "Yes, we specialize in building custom web applications tailored to your specific requirements. Our team will work closely with you to understand your needs and deliver a solution that fits."
    },
    {
        question: "What technologies do you use?",
        answer: "We use a variety of technologies including React, Angular, Node.js, Python, and more. Our team is proficient in both front-end and back-end development to create robust applications."
    },
    {
        question: "How long does a project take?",
        answer: "The timeline for a project depends on its complexity and scope. We typically provide an estimated timeline during the initial consultation, and we keep you updated throughout the development process."
    },
    {
        question: "Do you provide support after the project is completed?",
        answer: "Yes, we offer ongoing support and maintenance services after the project is completed. Our team is available to assist you with any issues or updates you may need."
    },
];

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

const FaqSection: React.FC = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [value, setValue] = React.useState(0);

    const handleTabs = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Container maxWidth="md">
                <Box sx={{ my: 5 }}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleTabs} aria-label="basic tabs example" textColor="inherit"
                                    sx={{ color: 'inherit' }} indicatorColor="secondary">
                                <Tab label="Contact Details" {...a11yProps(0)}
                                />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Paper elevation={0} sx={{ mt: 4, p: { xs: 2, md: 3 }, backgroundColor: 'transparent' }}>
                                {faqData.map((faq, index) => (
                                    <Accordion
                                        key={`faq-item-${index}`}
                                        expanded={expanded === `panel${index}`}
                                        onChange={handleChange(`panel${index}`)}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index}-content`}
                                            id={`panel${index}-header`}
                                        >
                                            <Typography variant="h6" fontWeight="500">
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="body1" color="text.secondary">
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Paper>
                        </CustomTabPanel>

                    </Box>



              
                </Box>
            </Container>
        </Box>
    );
};

export default FaqSection;