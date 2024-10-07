import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isLogged: true,
  moneyStatus: [],
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
    saveFinanceForm: (state, action) => {
      state.moneyStatus = [...state.moneyStatus, action.payload];
    },
  },
});

export const {login, logOut, saveFinanceForm} = user.actions;

export default user.reducer;
