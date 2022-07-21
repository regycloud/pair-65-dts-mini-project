import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { keluarDariAplikasi } from "../authentication/firebase";
import logo from "../assets/images/Logo.png";
import { auth } from "../authentication/firebase"
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
    const navigate = useNavigate();
    const buttonLogoutOnClickHandler = async () => {
        await keluarDariAplikasi();
        navigate("/login");
    };
    const buttonLoginOnClickHandler = async () => {
        navigate("/login");
    };

    const [user] = useAuthState(auth)

    return (
        <Box className={styles.grow}>
            <AppBar position="static">
                <Toolbar><Link to='/' style={{display: 'flex', textDecoration: 'none', color: 'white'}}>
                    <img src={logo} width={40} style={{paddingRight: 20, paddingLeft: 30}} alt="home"/>
                    <Typography variant="h5" sx={{paddingTop: 1, paddingRight: 2}}>Home</Typography>
                   </Link>
                    <Typography variant="h5" sx={{}}>Profile</Typography>
                    <Typography variant="h6" className={styles.grow} sx={{textDecoration: 'none'}}>
                   </Typography>
                   {user !== null? <Typography>Hallo {user?.email} </Typography> : ''}
                    {user !== null ? <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
                          Log Out
                    </Button> : <Button color="inherit" onClick={buttonLoginOnClickHandler}>
                        Log In
                    </Button>}         

                   
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;