import { useTheme, Typography, Box } from "@mui/material";

export default function Logo() {
    const theme = useTheme();
    
    return (
        <Box sx={{ position: "relative", width: 90, height: 90 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 200 200">
                {/* <rect width="200" height="200" fill="#18181b" /> */}

                <polygon points="50,60 80,50 80,110 50,120" fill="#a1a1aa" />
                <polygon points="80,50 110,60 110,120 80,110" fill="#71717a" />
                <polygon points="50,60 80,50 110,60 80,70" fill="#d4d4d8" />

                <polygon points="90,80 120,70 120,130 90,140" fill="#52525b" />
                <polygon points="120,70 150,80 150,140 120,130" fill="#3f3f46" />
                <polygon points="90,80 120,70 150,80 120,90" fill="#71717a" />
            </svg>
            
            {/* Typography component will inherit theme colors automatically */}
            <Typography
                sx={{
                    position: "absolute",
                    fontWeight: 900,
                    width: "100%",
                    textAlign: "center",
                    bottom: 0,
                    left: -1,
                    fontSize: "1.2rem",
                }}
            >
                S B
            </Typography>
        </Box>
    );
}