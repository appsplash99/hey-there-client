import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Layout } from './components/Layout/Layout';
import { Typography } from '@material-ui/core';
import { SignUp } from './features/user/SignUp';
import { LogIn } from './features/user/LogIn';
import { Feed } from './features/feed/Feed';
import { useDispatch } from 'react-redux';
// import { loginWithToken, logout } from './features/user/userSlice';
// import ProfileEdit from './features/Profile/ProfileEdit';
// import Search from './features/Profile/Search';
// import FriendsProfile from './features/Profile/FriendsProfile';
// import { PrivateRoute } from './features/user/PrivateRoute';

import './App.css';

function App() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   (async function () {
  //     const { userLoggedIn, localToken } =
  //       JSON.parse(localStorage?.getItem('user')) || {};
  //     userLoggedIn && localToken && dispatch(loginWithToken({ localToken }));
  //     setupAuthExceptionHandler(dispatch, navigate);
  //   })();
  // }, [dispatch, navigate]);

  // const setupAuthExceptionHandler = (dispatch, navigate) => {
  //   const UNAUTHORIZED = 401;
  //   axios.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error?.response?.status === UNAUTHORIZED) {
  //         dispatch(logout());
  //         navigate('login');
  //       }
  //       return Promise.reject(error);
  //     },
  //   );
  // };

  return (
    <div>
      <Layout />
      <Routes>
        <Route
          path="/read"
          element={
            <>
              <Container>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
                  non enim praesent elementum facilisis leo vel. Risus at ultrices mi
                  tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                  tellus. Convallis convallis tellus id interdum velit laoreet id donec
                  ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
                  quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
                  proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
                  tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
                  Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
                  integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
                  lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
                  Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                  vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
                  Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
                  senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
                  Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
                  maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
                  aliquam ultrices sagittis orci a.
                </Typography>
              </Container>
            </>
          }
        />

        <Route path="/" element={<Feed />} />

        {/* PUBLIC ROUTES */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

        <Route
          path="/all-posts"
          element={
            <Container maxWidth="md">
              <Feed />
            </Container>
          }
        />
        {/**
         * 1. TIMELINE - POSTS - /
         * 2. PROFILE - /profile
         */}

        <Route path="*" element={<>ROute Not Found</>} />
      </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
