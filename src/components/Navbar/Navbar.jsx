import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    return (<AppBar sx={{ backgroundColor: "#ACB75A" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <h className='logo'>
                GUAYABA
            </h>
            <Button endIcon={<HomeIcon />} sx={{ color: "white" }}>
                Home
            </Button>
            <Button sx={{ color: "white" }}>
                Productos
            </Button>
            <Button sx={{ color: "white" }}>
                Ayuda
            </Button>
            <CartWidget />

        </Toolbar>
    </AppBar>);
}

export default Navbar;