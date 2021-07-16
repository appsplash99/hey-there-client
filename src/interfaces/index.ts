export interface IPost {
  _id?: string;
  postId: string;
  userId?: string;
  desc?: string;
  img?: string;
  likes?: string[];
}

export interface IfeedState {
  friends: string[];
  posts: IPost[];
  user: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'error' | 'failed';
  error: null;
}

export interface IuserState {
  userLoggedIn: null;
  isUserLoggedIn: boolean;
  // TODO: Change this
  // user: string[];
  user: any;
  status?: 'idle' | 'loading' | 'succeeded' | 'error';
  token: null;
  error: null;
}
