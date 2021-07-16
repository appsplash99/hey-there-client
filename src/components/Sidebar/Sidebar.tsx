import React from 'react';
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Bookmark,
  Event,
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './Sidebar.styles';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';

type SidebarProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <RssFeed fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <Chat fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Chats" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <PlayCircleFilledOutlined fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <Bookmark fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <Event fontSize="large" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
      </List>
      <Divider />
      <Button variant="text" color="secondary">
        Show Users
      </Button>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="John Doe" secondary="Online" />
        </ListItem>
      </List>
      <Box display="flex" flexDirection="column">
        {[...Array(10)].map((sectionId, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemIcon>
            <ListItemText primary="John Doe" secondary="Online" />
          </ListItem>
        ))}
      </Box>
    </Drawer>
  );
};
