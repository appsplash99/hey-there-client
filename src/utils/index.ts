// TODO: might need to remove any
export const setLocalStorage = async (user: any, token: any) => {
  await localStorage.setItem(
    'logincredentials',
    JSON.stringify({
      token,
      userName: user.username,
      _id: user._id,
    }),
  );
};

export const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

export const statusEnum = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  REJECTED: 3,
};
