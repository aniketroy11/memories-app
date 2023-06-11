import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Link, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import memoryLogo from "../../images/memoryLogo.png"

import useStyles from "../Navbar/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
const Navbar = () => {

  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <img
          src={memoryLogo}
          alt="memories"
          height="80px"
        />
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="30px"
        />
      </div>
      <Toolbar>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imaggeUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
          </div>
        ) : (

          <Button variant="contained" color="primary" onClick={() => navigate("/auth")}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

