import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'English',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    selectLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { selectLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
