import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moviesData",
  initialState: {
    featuringMovie: null,
    featureClidckedMovie: null,
    nowMoviePlaying: null,
    trailerId: null,
    isWatchList: false,
    cardName: false,
    popular: null,
    topRated: null,
    upComing: null,
    tvShows: null,
    topRatedShows: null,
    watchList: [],
  },
  reducers: {
    nowFeaturingMovie: (state, action) => {
      state.featuringMovie = action.payload;
    },
    addFetureClickedMovie: (state, action) => {
      state.featureClidckedMovie = action.payload;
    },
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
    addTVShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
    addWatchList: (state, action) => {
      state.watchList.push(action.payload);
    },
    setIsWatchList: (state, action) => {
      state.isWatchList = action.payload;
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
  addTVShows,
  setIsWatchList,
  addTopRatedShows,
  nowFeaturingMovie,
  addFetureClickedMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
