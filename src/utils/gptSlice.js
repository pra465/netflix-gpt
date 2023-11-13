import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    searchedMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    searchedMovieSuggestions: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { toggleGptSearchView, searchedMovieSuggestions } =
  gptSlice.actions;

export default gptSlice.reducer;
