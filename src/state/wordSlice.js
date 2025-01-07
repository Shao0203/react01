import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  English: [
    { word: 'hello', def: '你好', remembered: true },
    { word: 'apple', def: '苹果', remembered: false },
    { word: 'name', def: '名字', remembered: false },
  ],
  Spanish: [
    { word: 'hola', def: '你好', remembered: false },
    { word: 'manzana', def: '苹果', remembered: true },
    { word: 'nombre', def: '名字', remembered: true },
  ],
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    toggleRemembered: (state, action) => {
      const { word, language } = action.payload;
      const wordToFind = state[language].find((w) => w.word === word);
      wordToFind.remembered = !wordToFind.remembered;
    },
  },
});

export const selectWords = (state) =>
  state.word[state.settings.selectedLanguage];
export const { toggleRemembered } = wordSlice.actions;
export default wordSlice.reducer;
