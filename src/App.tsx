import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Navigation } from './components/Navigation/Navigation';
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
      <Navigation />
      <Routes>
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
