import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    searchComponent: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    openSearchComponent: (state, action) => {
      state.searchComponent = action.payload;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { openSearchComponent, addGptMovies } = gptSlice.actions;

export default gptSlice.reducer;
