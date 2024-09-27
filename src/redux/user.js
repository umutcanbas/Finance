import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isLogged: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = true;
    },
    logOut: state => {
      state.username = '';
      state.isLogged = false;
    },
  },
});

export const {login, logOut} = user.actions;

export default user.reducer;
