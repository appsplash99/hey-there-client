import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/apiRoutes';
import { IPost, IfeedState } from '../../interfaces';

export const fetchTimelinePost = createAsyncThunk(
  '/feed/timelinePost',
  async (userId: string) => {
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}/posts/timeline/all/`,
      data: { userId },
    });
    // console.log(response)
    return response.data;
  },
);

// TODO: ADD IN BACKEND
export const fetchUserPost = createAsyncThunk('feed/userPost', async (name) => {
  const response = await axios.get(`${BASE_URL}/posts/profile/${name}`);
  // console.log(response)
  return response.data;
});

// TODO: ADD IN BACKEND
export const fetchUserFriends = createAsyncThunk('feed/userFriends', async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/friends/${userId}`);
  console.log(response);
  return response.data;
});

// TODO: has type any
export const addNewPost = createAsyncThunk('feed/newPost', async (post: any) => {
  const response = await axios.post(`${BASE_URL}/posts`, post);
  // console.log(response)
  return response.data;
});

export const likesUpdate = createAsyncThunk('feed/likes', async (post: IPost) => {
  // console.log(post.post.user)
  const response = await axios({
    method: 'post',
    url: `${BASE_URL}/posts/${post.postId}/like`,
    data: {
      userId: post.userId,
    },
  });
  return response.data;
});

// TODO: ADD IN BACKEND
export const fetchUserFeed = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get(`${BASE_URL}/user`);
  console.log(response);
  return response.data;
});

export const initialState: IfeedState = {
  friends: [],
  posts: [],
  user: [],
  status: 'idle',
  error: null,
};

export const feedSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchUserPost.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [fetchUserPost.fulfilled.toString()]: (state, action) => {
      //  console.log(action.payload)
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchUserPost.rejected.toString()]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },

    [fetchTimelinePost.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [fetchTimelinePost.fulfilled.toString()]: (state, action) => {
      // console.log(action.payload)
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchTimelinePost.rejected.toString()]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },
    [fetchUserFeed.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [fetchUserFeed.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      // console.log(action.payload)
      state.user = action.payload.userLoggedIn;
    },
    [fetchUserFeed.rejected.toString()]: (state, action) => {
      // console.log("rejected", state, action);
      state.status = 'error';
      state.error = action.error.message;
    },

    [addNewPost.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [addNewPost.fulfilled.toString()]: (state, action) => {
      // console.log(action.payload)
      state.status = 'succeeded';
      state.posts.unshift(action.payload);
    },

    [addNewPost.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
    },

    [likesUpdate.pending.toString()]: (state) => {
      state.status = 'loading';
    },

    [likesUpdate.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      // console.log(action.payload.updatedPost, " payload")
      const { _id, likes, user } = action.payload.updatedPost;
      console.log('lineNumber 123', _id, likes, user);

      const isPostLiked = likes.includes(user);
      console.log(isPostLiked);

      const posts = state.posts.find((post) => post._id === _id);

      if (isPostLiked) {
        posts?.likes?.push(user);
      } else {
        const like = posts?.likes?.indexOf(user);
        if (like) posts?.likes?.splice(like, 1);
      }
    },

    [likesUpdate.rejected.toString()]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },

    [fetchUserFriends.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [fetchUserFriends.fulfilled.toString()]: (state, action) => {
      state.status = 'succeeded';
      state.friends = action.payload.friendList;
    },
    [fetchUserFriends.rejected.toString()]: (state, action) => {
      console.log('rejected', state, action);
      state.status = 'error';
      state.error = action.error.message;
    },
  },
});

export default feedSlice.reducer;
