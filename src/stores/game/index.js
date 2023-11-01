import { fetchGames } from "../../services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  game: [],
  selectedGame: {},
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectGame: (state, action) => {
      state.selectedGame = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.game = action.payload;
    });
  },
});

export const { selectGame } = gameSlice.actions;

export default gameSlice.reducer;
