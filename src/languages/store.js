import { configureStore, createSlice } from '@reduxjs/toolkit';

/*  Redux store för att hantera språktillståndet  */

const languageSlice = createSlice({
  name: 'language',
  initialState: 'Eng', // Default language
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
});
