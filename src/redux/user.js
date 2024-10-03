import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isLogged: true,
  moneyStatus: [
    {
      category: 'salary',
      date: '10/3/2024, 3:58:59 PM',
      description: 'Adddada',
      money: '20000',
      type: 'income',
    },
    {
      category: 'rent',
      date: '10/3/2024, 3:58:59 PM',
      description: 'Adddada',
      money: '10000',
      type: 'expense',
    },
    {
      category: 'invoice',
      date: '10/3/2024, 3:58:59 PM',
      description: 'Adddada',
      money: '7500',
      type: 'expense',
    },
    {
      category: 'subscription',
      date: '10/3/2024, 3:58:59 PM',
      description: 'Adddada',
      money: '250',
      type: 'expense',
    },
  ],
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
