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
    addWord: (state, action) => {
      const { language, word, def } = action.payload;
      state[language].push({ word, def, remembered: false });
    },
    toggleRemembered: (state, action) => {
      const { word, language } = action.payload;
      const wordToFind = state[language].find((w) => w.word === word);
      wordToFind.remembered = !wordToFind.remembered;
    },
  },
});

export const selectWords = (state) =>
  state.word[state.settings.selectedLanguage];

export const selectFilteredWords = (state) => {
  const words = selectWords(state);
  return words
    .filter((word) =>
      state.action.searchTerm
        ? word.word.startsWith(state.action.searchTerm)
        : word
    )
    .filter((word) => {
      if (state.action.filter === 'remembered') return word.remembered;
      if (state.action.filter === 'unremembered') return !word.remembered;
      return true;
    })
    .sort((wordA, wordB) => {
      if (state.action.sort === 'asc')
        return wordA.word.localeCompare(wordB.word);
      if (state.action.sort === 'desc')
        return wordB.word.localeCompare(wordA.word);
      return 0;
    });
};

export const selectRememberedWords = (state) =>
  state.word[state.settings.selectedLanguage].filter((word) => word.remembered)
    .length;

export const selectRemainingWords = (state) =>
  state.word[state.settings.selectedLanguage].length -
  selectRememberedWords(state);

export const { addWord, toggleRemembered } = wordSlice.actions;
export default wordSlice.reducer;
