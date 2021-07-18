import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

type RenderDesktopMenuProps = {
  menuId: string;
  anchorEl: null | HTMLElement;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
};

export const RenderDesktopMenu: React.FC<RenderDesktopMenuProps> = ({
  menuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}> Logout</MenuItem>
    </Menu>
  );
};
