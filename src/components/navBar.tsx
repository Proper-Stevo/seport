"use client";
import * as React from "react";
import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from "@mui/material";

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}
interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}
export default function NavBar() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ))
        ) {
            setValue(newValue);
        }
    };
    return (
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Logo />
            <Box sx={{ width: '100%', textAlign: 'center', display: "flex", justifyContent: "center" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                    role="navigation"
                    textColor="inherit" 
                    indicatorColor="primary"
                    sx={{
                        height: "50%"

                    }}
                >
                    <LinkTab label="Home" href="/" />
                    <LinkTab label="About Me" href="/aboutme" />
                    <LinkTab label="Projects" href="/projects" />
                </Tabs>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="contained" sx={{ borderRadius: "50px", backgroundColor: "primary", color: "white", height: "40px", my: "auto", mr: "20px" }}>Contact</Button>
                <ModeSwitch />
            </Box>
        </Box>
    );
}