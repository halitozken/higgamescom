import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = screenSlice.actions;
export default screenSlice.reducer;
