"use client";
import * as React from "react";
import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  
  // Calculate which tab should be active based on the current path
  const getActiveTabValue = () => {
    if (pathname === "/") return 0;
    if (pathname === "/about") return 1;
    if (pathname === "/projects") return 2;
    return 0; // Default to Home tab
  };
  
  const [value, setValue] = React.useState(getActiveTabValue());
  
  // Update the active tab when the pathname changes
  React.useEffect(() => {
    setValue(getActiveTabValue());
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
    // Programmatically navigate based on the tab index
    if (newValue === 0) router.push('/');
    else if (newValue === 1) router.push('/about');
    else if (newValue === 2) router.push('/projects');
  };
  
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Logo />
      </Link>
      
      <Box sx={{ width: '100%', textAlign: 'center', display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
          role="navigation"
          textColor="inherit" 
          indicatorColor="primary"
          sx={{ height: "50%" }}
        >
          <Tab label="Home" />
          <Tab label="About Me" />
          <Tab label="Projects" />
        </Tabs>
      </Box>
      
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            sx={{ 
              borderRadius: "50px", 
              backgroundColor: "primary", 
              color: "white", 
              height: "40px", 
              my: "auto", 
              mr: "20px" 
            }}
          >
            Contact
          </Button>
        </Link>
        <ModeSwitch />
      </Box>
    </Box>
  );
}