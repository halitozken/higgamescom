import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk(
  "game/fetchGames",
  async ({ page, category }) => {
    const url = `https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=All&categories=${category}&tags=All&subType=All&type=All&mobile=All&rewarded=all&amount=70&page=${page}&format=json`;
    const response = await fetch(url);
    const games = await response.json();

    return games;
  }
);
