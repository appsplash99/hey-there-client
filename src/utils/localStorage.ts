// get credentials of loged in user
// export const getLocalCredentials = () => {
//   const token: string = JSON.parse(localStorage.getItem('logincredentials'))?.token;
//   const userId: string = JSON.parse(localStorage.getItem('logincredentials'))?.userId;
//   return { token, userId };
// };

// saving logged in user's credentials in localStorage
// export const setLocalCredentials = (token: string, userId: string): void => {
//   return localStorage.setItem('logincredentials', JSON.stringify({ token, userId }));
// };

// TODO: when logging out
// remove user credentials from localstorage
// export const removeLocalCredentials = () => {
//   return localStorage.removeItem('logincredentials');
// };

export {};
