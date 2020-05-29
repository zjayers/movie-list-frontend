/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMovieWatched } from '../../store/moviesStore';
const Like = (props) => {
  const dispatch = useDispatch();

  const { watched, movieId } = props;
  const btnText = watched ? 'Watched' : 'Not Watched';
  return (
    <button
      type='button'
      className={watched ? 'btn btn-success ' : 'btn btn-outline-danger'}
      onClick={() => dispatch(toggleMovieWatched(movieId))}
    >
      {btnText}
    </button>
  );
};

export default Like;
