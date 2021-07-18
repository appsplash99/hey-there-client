import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import VideocamIcon from '@material-ui/icons/Videocam';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { ProfileBar } from '../profile/ProfileBar';
// import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewPost,
  fetchTimelinePost,
  // fetchUserFriends,
  // fetchUserPost,
  // likesUpdate,
} from './feedSlice';
import { RootState } from '../../app/store';
import { Avatar, Box, Button, Link } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Share } from './Share';

const useStyles = makeStyles((theme: Theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export const Feed = () => {
  const classes = useStyles();

  const user = useSelector((state: RootState) => state.user);
  const feed = useSelector((state: RootState) => state.feed);
  const [postContent, setPostContent] = useState('');
  const dispatch = useDispatch();

  // console.log(user.user[0]._id)
  console.log(feed.friends);

  // const getUserNameFromId = (userId) => {

  //     console.log(feed?.friends.find(friendObj => friendObj._id === userId))

  //     // return feed?.friends.find(friendObj => friendObj._id === userId)?.name
  // }

  useEffect(() => {
    if (user.userLoggedIn !== null) {
      (async function () {
        // const response = await dispatch(fetchUserFriends(user?.user[0]?._id));
        // console.log(response);
      })();
    }
  }, [dispatch, user.userLoggedIn, user?.user]);

  // TODO: remove any
  const handleNewPost = (e: any) => {
    setPostContent(e.target.value);
  };

  const validatePost = (postContent: any) => {
    if (postContent === '') {
      return false;
    }
    return true;
  };

  const handlePost = () => {
    if (!validatePost(postContent)) {
      console.log('Cannot post empty post');
      return;
    }
    dispatch(
      addNewPost({
        userId: user?.user[0]?._id,
        desc: postContent,
        img: '',
        likes: [],
      }),
    );
    setPostContent('');
  };

  // const handleLikes = (postId: string) => {
  //   // console.log(postId);
  //   dispatch(likesUpdate({ postId, userId: user?.user[0]?._id }));
  // };

  useEffect(() => {
    if (user.userLoggedIn !== null) {
      (async function () {
        try {
          const result = await dispatch(fetchTimelinePost(user?.user[0]?._id));
          //  await dispatch(fetchUserPost(user?.userLoggedIn?.name))
          // await dispatch(fetchUserFriends())
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      })();
    }
    return () => {};
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={5} className={classes.mainGrid}>
          <div
            style={{
              flexGrow: 2,
              display: 'flex',
              backgroundColor: 'lightblue',
              padding: '1rem',
              height: '100vh',
              overflowY: 'auto',
            }}>
            <div>
              <Share />
              <main>Cool Post Title</main>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Link href={`/profile/${user?.user[0]?.name}`}>
                  <Avatar alt={user?.user[0]?.name} src={user?.user[0]?.profileImage} />
                </Link>
                <TextField
                  id="filled-multiline-flexible"
                  label="Multiline"
                  multiline
                  maxRows={5}
                  size="medium"
                  variant="filled"
                  value={postContent}
                  onChange={handleNewPost}
                />
              </div>
              <Box display="flex">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<PermMediaOutlinedIcon />}>
                  Send
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<VideocamIcon />}>
                  Send
                </Button>
                <Button color="primary" onClick={handlePost}>
                  Post
                </Button>
              </Box>
              {feed &&
                feed.posts.map((post) => (
                  // console.log(post)
                  <>
                    <Box
                      flexDirection="column"
                      justifyContent="space-between"
                      key={post._id}>
                      <p>{post?.desc}</p>
                      {post && (
                        <Button
                          variant="outlined"
                          color="primary"
                          // onClick={() => handleLikes(post?._id)}
                        >
                          {post?.likes?.length} likes
                        </Button>
                      )}
                    </Box>
                  </>
                ))}
              <div>fdsfsdf</div>
            </div>
          </div>
          <ProfileBar title={'Cool Profile Title'} description={sidebar.description} />
        </Grid>
      </Container>
    </>
  );
};
