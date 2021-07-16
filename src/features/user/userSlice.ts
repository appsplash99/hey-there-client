import axios from 'axios';
import { BASE_URL } from '../../utils/apiRoutes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IuserState } from '../../interfaces';

interface loginProps {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }: loginProps) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${BASE_URL}/api/login`,
        data: { email, password },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const setupAuthHeaderForServiceCalls = (token: string | null) => {
  if (token) {
    return (axios.defaults.headers.common['Authorization'] = token);
  }
  delete axios.defaults.headers.common['Authorization'];
};

const initialState: IuserState = {
  userLoggedIn: null,
  isUserLoggedIn: false,
  user: [],
  status: 'idle',
  token: null,
  error: null,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginWithToken: (state, action) => {
      state.token = action.payload.localtoken;
      state.userLoggedIn = action.payload.user;
      state.isUserLoggedIn = true;
      setupAuthHeaderForServiceCalls(action.payload.localtoken);
    },

    logout: (state) => {
      localStorage?.removeItem('user');
      state.userLoggedIn = null;
      state.isUserLoggedIn = false;
      state.token = null;
      state.user = [];
      state.status = 'idle';
      setupAuthHeaderForServiceCalls(null);
    },

    authReset: (state) => {
      state.userLoggedIn = null;
      state.isUserLoggedIn = false;
      state.token = null;
      state.status = 'idle';
    },
  },

  extraReducers: {
    [login.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [login.fulfilled.toString()]: (state, action) => {
      console.log(action.payload);
      state.status = 'succeeded';
      state.userLoggedIn = action.payload.user;
      state.isUserLoggedIn = true;
      state.user.push(action.payload.user);
      state.token = action.payload.token;
      localStorage?.setItem(
        'user',
        JSON.stringify({
          isUserLoggedIn: true,
          userLoggedIn: action.payload.user,
          localToken: action.payload.token,
        }),
      );
    },

    [login.rejected.toString()]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },
  },
});

export const { logout, authReset, loginWithToken } = usersSlice.actions;
export default usersSlice.reducer;
