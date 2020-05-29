import React from 'react';
import WatchToggle from '../shared/WatchToggle';
import { useSelector } from 'react-redux';

const MovieListItem = ({ movie }) => {
  const watched = useSelector((state) => state.watched);

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <>
      <tr
        style={{ cursor: 'pointer' }}
        data-toggle='collapse'
        data-target={`#${movie._id}`}
        className='clickable clickable-table'
        aria-controls={movie._id}
      >
        <td>{movie.name}</td>
        <td>{toTitleCase(movie.categories[0])}</td>
        <td>{movie.runtime} min</td>
        <td>
          <WatchToggle watched={watched[movie._id]} movieId={movie._id} />
        </td>
      </tr>
      <tr>
        <td colSpan='1'>
          <div id={movie._id} className='collapse'>
            <div className='media'>
              <div className='media-body'>
                <h5 className='mt-0'>{movie.name}</h5>
                <p>Released: {movie.year}</p>
                <p>Director: {movie.director}</p>
                <p>
                  <em>{movie.storyline}</em>
                </p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MovieListItem;
