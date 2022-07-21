import React from "react";
import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import background from "../assets/images/bg.png";
import { Grid, Box } from "@mui/material";


const LoginPage = () => {    
      return (
        <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid xs={7} sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}/>
                <Grid item xs={5} sx={{background: 'black'}}>
                    <Box sx={{color: 'white'}}>
                        <LoginOrRegisterForm loginOrRegister={"login"} />
                    </Box>
                </Grid>
        </Grid>

      );
    }

export default LoginPage;