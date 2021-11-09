// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

// REACT APP IMPORTS
import Characters from "./Pages/Characters";
import House from "./Pages/House";
import Students from "./Pages/Students";
import Staffs from "./Pages/Staffs";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <BrowserRouter>
          <AppBar>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                Harry Potter 
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Characters</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Students"
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Students </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/House"
                    >
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> House</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Staffs"
                    >
                      <ListItemIcon>
                        <BookmarksIcon />
                      </ListItemIcon>
                      <Typography variant="h6"> Staffs </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/"
                    color="default"
                  >
                    <HomeIcon />
                    Characters
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Students"
                    color="default"
                  >
                    <SchoolIcon />
                    Students
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/House"
                    color="default"
                  >
                    <PersonIcon />
                    House
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Staffs"
                    color="default"
                  >
                    <BookmarksIcon />
                    Staffs
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route exact path="/House" component={House} />
            <Route exact path="/Students" component={Students} />
            <Route exact path="/Staffs" component={Staffs} />
          </Switch>
        </BrowserRouter>
      </HideOnScroll>
    </div>
  );
};

export default Header;
