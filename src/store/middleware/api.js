/* eslint-disable consistent-return */
import fetchMovies from '../../services/movieService';
import * as actions from '../moviesStore';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.movieApiCallBegan.type) {
    return next(action);
  }
  try {
    const data = await fetchMovies(action.payload.searchTerm);
    dispatch(actions.movieApiCallSuccess(data));
  } catch (error) {
    dispatch(actions.movieApiCallFailure(error));
  }
};

export default api;
