import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import wordReducer from './wordSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    word: wordReducer,
  },
});
