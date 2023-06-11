import React, { useEffect, useState } from 'react'

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcom from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import {gapi} from 'gapi-script'
import Icon from './Icon'
import {useNavigate} from 'react-router-dom';

import {signup,signin} from '../../actions/auth';
import { useDispatch } from 'react-redux';


import useStyles from './styles';
import Input from './Input'

const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''};
const Auth = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(isSignup){
            dispatch(signup(formData,navigate));
        }
        else{
            dispatch(signin(formData,navigate));
        }
    }

    const handleChange = (e) => {
         setFormData({...formData,[e.target.name]:e.target.value});
    }

    const switchMode = () => {
        setIsSignup((preIsSignup) => !preIsSignup);
        handleShowPassword(false);
    }

    const clientId = "133978760424-r961rf10bno7mr2hugc7thlpqnppa9ae.apps.googleusercontent.com";

    useEffect(()=>{
        gapi.load("client:auth2",()=>{
            gapi.auth2.init({clientId:clientId})
        })
    },[])

    const googleSuccess = async(res)=>{

        
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log(result)

        try {
            dispatch({type:'AUTH' , data:{result,token}});
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure =(error)=>{
        console.log(error);
        console.log('Google Sing In was unsuccessful. Try Again Later');
    }



    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcom />
                </Avatar>
                <Typography variant='h5' >{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type='email' />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {
                            isSignup ? "Sign Up" : "Sign In"
                        }
                    </Button>
                    <GoogleLogin
                        clientId="133978760424-r961rf10bno7mr2hugc7thlpqnppa9ae.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon/>}
                                variant="contained"
                            
                            >Google Sing In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Sign In' : 'Create a account'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth



