import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moviesData",
  initialState: {
    nowMoviePlaying: {},
    trailerId: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowMoviePlaying = action.payload;
    },
    setTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
  },
});

export const { addNowPlaying, setTrailerId } = movieSlice.actions;
export default movieSlice.reducer;
