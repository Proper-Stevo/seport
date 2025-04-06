"use client";

import * as React from "react";
import Image from "next/image";
import {
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Stack,
    useTheme,
    styled,
    useMediaQuery
} from "@mui/material";
// import HeroImage from "./assets/Hero.png";

export default function Hero() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                textAlign: "center",
                backgroundImage: `url('/assets/Hero.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Grid
                container
                sx={{
                    height: "100%",
                    width: "100%"
                }}
            >
                {/* Left Column - 70% */}
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        height: "100%",
                        width: { xs: "100%", md: "70%" },
                        padding: 4,
                        color: "white"
                    }}
                >
                    <Stack sx={{ width: "100%", marginTop: 15, marginBottom: 0 }}>
                        <Typography variant="h1" component="h1" gutterBottom align="left"
                        >
                            Building Modern, Scalable, <br /> and Efficient Web  <br /> Applications.
                        </Typography>
                    </Stack>

                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "50px",
                            backgroundColor: "transparent",
                            height: "56px",
                            color: "white",
                            outline: "2px solid white",
                            padding: "0 32px",
                            fontSize: "18px",
                            fontWeight: "500",
                            textTransform: "none",
                            marginTop: "auto",
                            marginBottom: 0,
                            alignSelf: "flex-start"
                        }}
                    >
                        View My Work
                    </Button>
                </Grid>

                {/* Right Column - 30% */}
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        width: { xs: "100%", md: "30%" },
                        padding: 4,
                        color: "white"
                    }}
                >
                    <Stack sx={{

                        fontWeight: 400,
                        marginTop: 15,
                        marginLeft: 15,
                    }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            align="left"
                            sx={{
                                fontStyle: "italic",
                            }}
                        >
                            -Steven B.
                        </Typography>

                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            align="left"
                        >
                            Transforming ideas into powerful digital experiences with clean code and seamless functionality.
                        </Typography>
                    </Stack>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: "50px",
                            color: "white",
                            height: "56px", // Increased from 40px
                            padding: "0 32px", // Add horizontal padding
                            fontSize: "18px", // Increase font size
                            fontWeight: "500", // Make text slightly bolder
                            textTransform: "none", // Prevents all-caps (optional)
                            marginTop: "auto",
                            marginBottom: 0,
                            alignSelf: "flex-start",
                            minWidth: "200px" // Set minimum width
                        }}
                    >
                        Let's Work Together
                    </Button>

                </Grid>
            </Grid>
        </Box>
    );
}