import React from "react";
import classes from "./NavigationBar.module.css";
import Logo from "../../assets/images/logo.png";

const NavigationBar = () => {
  return (
    <nav className={classes.nav_bar}>
      <img className={classes.logo} src={Logo} alt="Aldrin Basa brand logo" />
      <a href="/#">Profile</a>
      <a href="/#">Resume</a>
      <a href="/#">Projects</a>
      <a href="/#">Contact</a>
    </nav>
  );
};

export default NavigationBar;
