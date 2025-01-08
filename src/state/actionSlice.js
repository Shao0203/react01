import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  sort: '',
  filter: '',
};

export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSort(state) {
      if (state.sort === '') state.sort = 'asc';
      else if (state.sort === 'asc') state.sort = 'desc';
      else {
        state.sort = '';
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setSearchTerm, setSort, setFilter } = actionSlice.actions;
export default actionSlice.reducer;
