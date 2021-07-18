/* eslint-disable */
import React from 'react';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

type RenderMobileMenuProps = {
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  mobileMoreAnchorEl: null | HTMLElement;
  handleMobileMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

export const RenderMobileMenu: React.FC<RenderMobileMenuProps> = ({
  mobileMenuId,
  isMobileMenuOpen,
  mobileMoreAnchorEl,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};
