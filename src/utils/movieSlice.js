import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moviesData",
  initialState: {
    nowMoviePlaying: {},
    trailerId: null,
    popular: {},
    topRated: {},
    upComing: {},
    watchList: [],
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowMoviePlaying = action.payload;
    },
    setTrailerId: (state, action) => {
      state.trailerId = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.upComing = action.payload;
    },
    addWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
  },
});

export const {
  addNowPlaying,
  setTrailerId,
  addPopular,
  addTopRated,
  addUpComing,
  addWatchList,
} = movieSlice.actions;
export default movieSlice.reducer;
