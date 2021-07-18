import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

interface sidebarProps {
  description?: string;
  social?: [];
  title?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  gridPosition: {
    position: 'absolute',
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export const ProfileBar: React.FC<sidebarProps> = (props) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      <Link display="block" variant="body1">
        Archive Title
      </Link>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      <Link display="block" variant="body1" href="/#">
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>Cool Grid Item</Grid>
          <Grid item>Item name</Grid>
        </Grid>
      </Link>
    </Grid>
  );
};
