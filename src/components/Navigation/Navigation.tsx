import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Topbar } from '../Topbar/Topbar';
import { useStyles } from './Layout.styles';
import { RenderDesktopMenu } from './RenderDesktopMenu';
import { RenderMobileMenu } from './RenderMobileMenu';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { Container } from '@material-ui/core';

export const Navigation: React.FC = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar
        open={open}
        menuId={menuId}
        mobileMenuId={mobileMenuId}
        handleDrawerOpen={handleDrawerOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <RenderMobileMenu
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <RenderDesktopMenu
        menuId={menuId}
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
