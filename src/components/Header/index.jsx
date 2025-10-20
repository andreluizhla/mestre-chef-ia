import { Link } from "react-router";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./index.css";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </Link>
            <IconButton>
                <AccountCircleIcon />
            </IconButton>
        </header>
    )
}

export default Header