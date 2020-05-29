import React from 'react';

import MovieListItem from '../MovieListItem.jsx/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Rating</th>
          <th>Watched</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <MovieListItem key={movie._id} movie={movie} />
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
