import Link from "next/link";
import styles from "../styles/Navbar.module.css";
// ^^ Make the above have className={styles.CLASS} below

import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// import makeStyles from "@mui/styles/makeStyles";
// import createStyles from "@mui/styles/createStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import CustomTheme from "../styles/theme";
import { Box } from "@mui/material";

// need to refactor this to take less time in the react profiler, as it is making the page take too long to load

export default function Navbar({ nav_h1 }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // can actually make the below load from an .md file later, that way people can add/hide things as they please
  const menu_items = [
    { link: "/edit", name: "Edit" },
    { link: "/", name: "Home" },
    //  { link: "/about", name: "About" },
    // { link: "/contact", name: "Contact" },
    { link: "/models", name: "Models" },
    { link: "/userpages", name: "User Pages" },
    { link: "/NewPage", name: "NewPage" },

    //  { link: "https://discord.gg/p3RKKSa", name: "Discord" },
    // { link: "/account", name: "My Account" },
    // { link: "/login", name: "Login" },
    // { link: "/cart", name: "Cart" },
  ];

  // const useStyles = makeStyles(
  //   (theme) =>
  //     createStyles({
  //       root: {
  //         flexGrow: 1,
  //         // background: CustomTheme.palette.background.default,
  //       },
  //       menuButton: {
  //         marginRight: theme.spacing(2),
  //       },
  //       title: {
  //         flexGrow: 2,
  //         //color: "red",
  //         //color: CustomTheme.palette.primary.main,
  //       },
  //     })
  //   //{ name: "MuiNavbar" }

  //   //the above method works if overriding the default styles
  //   //  "issue with navbar colour thing is because prop classname did not match server;
  //   // this issue does not exist on production build; fixed by
  //   // https://javascript.plainenglish.io/fixing-material-uis-classname-mismatch-for-react-75c6c2a2c409"

  //   // need to make the icon button ripple colour visible
  // );

  // const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        // color={"customNav"}
        elevation={0} //elevation makes it no longer have a dropshadow
      >
        {/* 
          //https://stackoverflow.com/a/67316147
          // the above isn't taking in the theme provider??
          */}
        <Toolbar>
          <Link href="/" passHref>
            <a>
              <figure>Logo</figure>
            </a>
          </Link>

          <Typography
            variant="h6"
            component="h1"
            // className={classes.title}
            color="default"
          >
            {nav_h1 || "Default Page Title"}
          </Typography>
          {/* https://mui.com/components/typography/#main-content
component lets us use the h1 element without the styling aspect
*/}

          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="main-menu"
            aria-haspopup="true"
            onClick={handleClick}
            size="large"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="nav"
            className={styles.main_menu}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {/* above box is needed to apply the display props, serves as a utility wrapper and replaces nav completely */}
            {menu_items.map((value, index) => {
              return (
                <Link href={value.link} key={"main_menu" + index} passHref>
                  <Button color="inherit" key={"main_menu" + index}>
                    {/* <a key={"main_menu" + index}>{value.name}</a> */}
                    {/* Hopefully removing the <a> above removes the nesting error */}
                    {value.name}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <>
        <Menu
          id="main-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          //custom props below
          PaperProps={{
            style: {
              width: "100%",
              marginTop: "4px",
              background: "#212529",
              color: "#f8f9fa",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {menu_items.map((value, index) => {
            return (
              <Link href={value.link} key={"mobile_menu" + index} passHref>
                <MenuItem onClick={handleClose} key={"mobile_menu" + index}>
                  {/* <a key={"mobile_menu" + index}>{value.name}</a> */}
                  {value.name}
                </MenuItem>
              </Link>
            );
          })}
        </Menu>
      </>
    </>
  );
}
