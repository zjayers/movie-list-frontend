/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    watched: {},
    genres: { all: true },
    selectedGenre: 'all',
    searchTerm: '',
    loading: false,
    error: false,
    currentPage: 1,
  },
  reducers: {
    movieApiCallBegan: (state) => {
      state.error = false;
      state.loading = true;
    },
    movieApiCallSuccess: (state, action) => {
      state.error = false;
      state.loading = false;
      state.movies = action.payload;

      for (let movie of state.movies) {
        if (!state.genres[movie.categories[0].toLowerCase()]) {
          state.genres[movie.categories[0].toLowerCase()] = true;
        }
        state.watched[movie._id] = false;
      }
    },
    movieApiCallFailure: (state, action) => {
      state.error = true;
      console.log(action.payload);
    },
    updateCurrentGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleMovieWatched: (state, action) => {
      state.watched[action.payload] = !state.watched[action.payload];
    },
    movieAdded: (state, action) => {
      state.movies.unshift(action.payload);
      state.watched[action.payload._id] = false;
    },
  },
});

export const {
  movieApiCallBegan,
  movieApiCallSuccess,
  movieApiCallFailure,
  updateCurrentGenre,
  updateSearchTerm,
  setCurrentPage,
  toggleMovieWatched,
  movieAdded,
} = slice.actions;
export default slice.reducer;
