import { InitialState } from "src/Types";
import { getHomePageVideos } from "./getHomePageVideos";
import { getSearchPageVideos } from "./getSearchPageVideos";
import { createSlice } from "@reduxjs/toolkit";
import { getVideoDetails } from "./getVideoDetails";
import { getRecommendedVideos } from "./getRecommendedVideos";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recomendedVideos: [],
  sideBar: true,
  darkMode: localStorage.getItem("darkMode") ? true : false,
};

export const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recomendedVideos = action.payload.parsedData;
    });
  },
});

export const {
  clearVideos,
  clearSearchTerm,
  changeSearchTerm,
  toggleSideBar,
  toggleTheme,
} = youtubeSlice.actions;
