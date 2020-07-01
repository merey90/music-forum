import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Hidden, IconButton, Zoom, Typography, SwipeableDrawer } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerState] = React.useState(false);
  const closeDrawer = () => setDrawerState(false);
  const triggerDrawer = () => setDrawerState(!isDrawerOpen);

  return (
    <>
      <AppBar position="sticky" className="header">
        <Toolbar>
          <Hidden smUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={triggerDrawer} className="menu-button">
              <Zoom in={!isDrawerOpen}>
                <MenuIcon />
              </Zoom>
              <Zoom in={isDrawerOpen}>
                <CloseIcon />
              </Zoom>
            </IconButton>
          </Hidden>
          <Link to="/">
            <img className="header-logo" src={`${process.env.PUBLIC_URL}/header-logo.png`} alt="Header-logo" />
          </Link>
          <Typography variant="h6" className="header-typo">
            Kazakh-German Music Forum
          </Typography>
          <Hidden xsDown>
            <Navigation handleClose={closeDrawer} />
          </Hidden>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={isDrawerOpen} onClose={closeDrawer} onOpen={() => {}}>
        <div className="sidebar">
          <Navigation handleClose={closeDrawer} />
        </div>
      </SwipeableDrawer>
    </>
  );
};
