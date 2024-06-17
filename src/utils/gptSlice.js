import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    searchComponent: false,
  },
  reducers: {
    openSearchComponent: (state, action) => {
      state.searchComponent = action.payload;
    },
  },
});

export const { openSearchComponent } = gptSlice.actions;

export default gptSlice.reducer;
