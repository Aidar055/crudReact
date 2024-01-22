import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="nav">
          <Toolbar>
            <NavLink to={"/"}>
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to={"/Create"}>
              <Button color="inherit">Create</Button>
            </NavLink>
            <NavLink to={"/details"}>
              <Button color="inherit">Edit</Button>
            </NavLink>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
};

export default Navbar;
