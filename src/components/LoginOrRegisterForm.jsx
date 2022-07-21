import React, {useEffect, useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LoginOrRegisterForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginDenganEmailDanPassword, registerDenganEmailDanPassword } from "../authentication/firebase";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth)

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });
    
    const textFieldEmailOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            email: event.target.value,
        });
    };

    const textFieldPasswordOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            password: event.target.value,
        });
    };

    const loginHandler = () => {
        loginDenganEmailDanPassword(credential.email, credential.password);
    };

    const registerHandler = () => {
        registerDenganEmailDanPassword(credential.email, credential.password);
    };

    const buttonLoginOrRegisterOnClickHandler = () => {
        if (loginOrRegister === "login") {
            loginHandler();
        } else {
            registerHandler();
        }
    };

    useEffect(
        () => {
            if (isLoading) {
                return;
            };

            if (user) {
                navigate("/");
            }
        },
        [user, isLoading, navigate]
    )

    return (
        <Box sx={{width: '100', background: 'grey', height:'100vh'}}>
            <Box className={styles.boxy} component="form" noValidate>
                <Typography variant="h2" sx={{paddingBottom: '20vh', textAlign:'center'}}>
                    {loginOrRegister === "login" ? "Login Page" : "Register"}
                </Typography>

                <TextField
                    label="Email"
                    type="email"
                    value={credential.email}
                    onChange={textFieldEmailOnChangeHandler}
                 />

                 <TextField
                    label="Password"
                    type="password"
                    value={credential.password}
                    onChange={textFieldPasswordOnChangeHandler}
                />

                <Button
                    variant="outlined"
                    size="small"
                    onClick={buttonLoginOrRegisterOnClickHandler}
                >{loginOrRegister === "login" ? "Login" : "Register Account"}
                    </Button>
                    {loginOrRegister === "login" ? (
                        <Link to="/register" style={{textDecoration: 'none', color: 'white'}}>
                            <Typography variant="h5">or do you want to register? Click here</Typography>
                        </Link>
                        ): (
                            <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
                                <Typography variant="h5" sx={{color: 'white'}}>or do you want to login? Click here</Typography>
                            </Link>
                        )}
            </Box>
        </Box>
    )
};

export default LoginOrRegisterForm