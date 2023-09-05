import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import Auth from "../Auth"; // Ensure the path is correct

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path === "/home" && !Auth.isUserAuthenticated()) {
      navigate("/login"); //eza not authenticated rje3 5edne 3al login
      return;
    }

    if (
      (path === "/login" || path === "/signup") &&
      Auth.isUserAuthenticated()
    ) {
      navigate("/home");
      return;
    }

    //eza ana already bel page li 3mlt 3laya navigate bdal fiya
    if (path !== location.pathname) {
      navigate(path);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation("/home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleNavigation("/login")}>
          Login
        </Button>
        <Button color="inherit" onClick={() => handleNavigation("/signup")}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
