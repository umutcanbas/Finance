import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  isLogged: true,
  moneyStatus: [
    {
      category: 'salary',
      date: '2024-10-04T17:09:17.303Z',
      description: 'Maaş',
      money: '20000',
      type: 'income',
    },
    {
      category: 'rent',
      date: '2024-10-01T17:09:17.303Z',
      description: 'Kira',
      money: '10000',
      type: 'expense',
    },
    {
      category: 'invoice',
      date: '2024-10-02T17:09:17.303Z',
      description: 'Telefon Taksit',
      money: '7500',
      type: 'expense',
    },
    {
      category: 'subscription',
      date: '2024-10-03T17:09:17.303Z',
      description: 'Netflix',
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
