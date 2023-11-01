import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    resetPage: (state, actions) => {
      state.page = actions.payload;
    },
  },
});

export const { increment, decrement, resetPage } = pageSlice.actions;

export default pageSlice.reducer;
