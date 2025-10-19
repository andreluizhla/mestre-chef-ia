import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./index.css";

const Header = () => {
    return (
        <header>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
        </header>
    )
}

export default Header