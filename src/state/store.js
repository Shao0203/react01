import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import wordReducer from './wordSlice';
import actionReducer from './actionSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    word: wordReducer,
    action: actionReducer,
  },
});
