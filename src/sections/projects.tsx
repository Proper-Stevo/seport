"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Image from 'next/image';
import Restaurant from '../../public/assets/resSS.png';
import KARRASS from '../../public/assets/KARRASS.png';
import Space from '../../public/assets/spaceSS.png';

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

// Define project data
const projectsData = [
    {
        id: 1,
        title: "South Central With Love",
        image: Restaurant,
        shortDescription: "A community-focused restaurant app",
        fullDescription: "A community-focused restaurant application built with React and Express. This app connects local food establishments with residents, featuring online ordering and delivery services. Users can browse menus, place orders, and track deliveries in real-time. The platform also highlights special offers and local community events.",
        technologies: ["React", "Express", "MongoDB", "Node.js", "Stripe API"],
        demoLink: "https://southcentral-with-love.netlify.app",
        githubLink: "https://github.com/yourusername/southcentral"
    },
    {
        id: 2,
        title: "KARRASS",
        image: KARRASS,
        shortDescription: "Modern e-commerce platform",
        fullDescription: "A fully-featured e-commerce platform built with React and Node.js. KARRASS includes secure payment processing through Stripe, real-time inventory management, user authentication, and an admin dashboard for product management. The responsive design ensures a seamless shopping experience across all devices.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
        demoLink: "https://karrass-shop.herokuapp.com",
        githubLink: "https://github.com/yourusername/karrass"
    },
    {
        id: 3,
        title: "Space Invaders",
        image: Space,
        shortDescription: "Classic arcade game remake",
        fullDescription: "A modern browser-based remake of the classic arcade game Space Invaders. Built with JavaScript and HTML5 Canvas, this game features smooth animations, sound effects, and multiple difficulty levels. The project demonstrates advanced JavaScript concepts including game loops, collision detection, and sprite animations.",
        technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Webpack"],
        demoLink: "https://space-invaders-game.netlify.app",
        githubLink: "https://github.com/yourusername/space-invaders"
    }
];


export default function ImgMediaCard() {
    const [value, setValue] = React.useState(0);
    const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        // Reset selected project when switching to Projects tab
        if (newValue === 0) {
            setSelectedProject(null);
        }
        // Auto-select first project when switching to About tab
        else if (newValue === 1 && selectedProject === null) {
            setSelectedProject(1);
        }
    };

    const handleCardClick = (projectId: number) => {
        setValue(1); // Switch to About tab
        setSelectedProject(projectId);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
            // backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 3,
            borderRadius: 2
        }}>
            {/* Tabs Section - Now at the top */}
            <Box sx={{ width: '80%', mb: 4 }}>
                {/* Remove the color="inherit" prop entirely */}
                <Divider
                    sx={{
                        height: 1,
                        opacity: 1,
                        mb: 1,
                        '&.MuiDivider-root': {
                            borderColor: 'text.primary' // This will adapt to theme changes
                        }
                    }}
                />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="project tabs"
                    sx={{ color: 'inherit' }}
                    centered
                >
                    <Tab label="Projects" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                {/* Cards in a row */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    color: 'inherit',
                    justifyContent: 'center',
                    alignItems: { xs: 'center', md: 'stretch' }
                }}>
                    {projectsData.map((project) => (
                        <Card
                            key={project.id}
                            sx={{
                                maxWidth: 345,
                                color: 'inherit',
                                cursor: 'pointer',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 6,
                                },
                            }}
                            onClick={() => handleCardClick(project.id)}
                        >
                            <CardMedia
                                component="img"
                                alt={project.title}
                                height="200"
                                image={project.image.src}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {project.shortDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="inherit"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.demoLink, '_blank');
                                    }}
                                >
                                    {project.id === 3 ? 'Play Game' : 'Demo'}
                                </Button>
                                <Button
                                    size="small"
                                    color="inherit"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.githubLink, '_blank');
                                    }}
                                >
                                    {project.id === 3 ? 'View Code' : 'GitHub'}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <Box sx={{ color: 'inherit', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Project selection tabs */}
                    <Box sx={{ mb: 3 }}>
                        <Tabs
                            value={selectedProject || 0}
                            onChange={(e, newValue) => setSelectedProject(newValue)}
                            textColor="inherit"
                            indicatorColor="secondary"
                            sx={{
                                color: 'inherit',
                                '& .MuiTab-root': { color: 'inherit' },
                                '& .Mui-selected': { color: 'inherit' },
                                borderBottom: 1,
                                borderColor: 'divider'
                            }}
                        >
                            {projectsData.map((project) => (
                                <Tab key={project.id} label={project.title} value={project.id} />
                            ))}
                        </Tabs>
                    </Box>

                    {selectedProject && (
                        <Box>
                            {/* Find the selected project from our data array */}
                            {(() => {
                                const project = projectsData.find(p => p.id === selectedProject);
                                if (!project) return null;

                                return (
                                    <Grid container spacing={3}>
                                        <Grid >
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                                    color: 'inherit'
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={project.image.src}
                                                    alt={project.title}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid >
                                            <Typography variant="h4" component="h2" gutterBottom>
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 2 }}>
                                                {project.fullDescription}
                                            </Typography>
                                            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                                Technologies
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                                                {project.technologies.map((tech) => (
                                                    <Paper
                                                        key={tech}
                                                        sx={{
                                                            px: 1.5,
                                                            py: 0.5,
                                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                                            color: 'inherit'
                                                        }}
                                                    >
                                                        {tech}
                                                    </Paper>
                                                ))}
                                            </Box>
                                            <Box sx={{ mt: 3 }}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    sx={{ mr: 2 }}
                                                    onClick={() => window.open(project.demoLink, '_blank')}
                                                >
                                                    {project.id === 3 ? 'Play Game' : 'View Demo'}
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="secondary"
                                                    onClick={() => window.open(project.githubLink, '_blank')}
                                                >
                                                    Source Code
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                );
                            })()}
                        </Box>
                    )}
                </Box>
            </CustomTabPanel>
          
        </Box>
    );
}