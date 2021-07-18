import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/apiRoutes';

interface Profile {
  userId: string;
  profileId: string;
}

interface IProfile {
  user: Profile;
}
export const getUser = createAsyncThunk('profile/getUser', async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}`);
  return response.data;
});

export const getUserProfileByUserName = createAsyncThunk(
  'profile/getUserProfileByUserName',
  async (username) => {
    const response = await axios.get(`${BASE_URL}/posts/profile/${username}`);
    console.log(response);
    return response.data;
  },
);

export const searchUser = createAsyncThunk('profile/searchUser', async (name) => {
  const response = await axios.get(`${BASE_URL}/search/${name}`);
  // console.log(response)
  return response.data;
});

export const followUser = createAsyncThunk(
  'profile/followUser',
  async (user: IProfile) => {
    console.log(user?.user?.userId, user?.user?.profileId);
    const response = await axios.post(`${BASE_URL}/user/${user.user.profileId}/follow`, {
      user: user.user.userId,
    });
    console.log(response);
    return response.data;
  },
);

export const unFollowUser = createAsyncThunk(
  'profile/unFollowUser',
  async (user: IProfile) => {
    console.log(user.user.userId, user.user.profileId);
    const response = await axios.post(
      `${BASE_URL}/user/${user.user.profileId}/unfollow`,
      {
        user: user.user.userId,
      },
    );
    console.log(response);
    return response.data;
  },
);

// TODO: remove any
export const updateUser = createAsyncThunk('profile/updateUser', async (values: any) => {
  console.log(values);
  const response = await axios.put(`${BASE_URL}/user/${values.user}`, {
    user: values.user,
    name: values.name,
    bio: values.bio,
  });
  // console.log(response)
  return response.data;
});
export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: [],
    friend: [],
    profile: [],
    posts: [],
    error: null,
    status: 'idle',
  },
  reducers: {},

  extraReducers: {
    [getUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [getUser.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      console.log(state, action);
      state.user = action.payload.other;
    },

    [getUser.rejected.toString()]: (state) => {
      state.status = 'failed';
    },

    [searchUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [searchUser.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      console.log(state, action);
      state.friend = action.payload;
    },

    [searchUser.rejected.toString()]: (state) => {
      state.status = 'failed';
    },

    [followUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [followUser.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      console.log(state, action);
      state.profile = action.payload.newUser.followers;
      // state.friend[0].followers =  [...state?.friend[0]?.followers, _id]
    },

    [followUser.rejected.toString()]: (state) => {
      state.status = 'failed';
    },

    [unFollowUser.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [unFollowUser.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      console.log(state, action);
      state.profile = action.payload.newUser.followers;
      // state.friend[0].followers =  [...state?.friend[0]?.followers, action.meta.arg.userId]
    },

    [unFollowUser.rejected.toString()]: (state) => {
      state.status = 'failed';
    },

    [getUserProfileByUserName.pending.toString()]: (state) => {
      state.status = 'pending';
    },

    [getUserProfileByUserName.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      state.posts = state.posts.concat(action.payload);
    },

    [getUserProfileByUserName.rejected.toString()]: (state) => {
      state.status = 'failed';
    },
  },
});

export default profileSlice.reducer;
