/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { updateCurrentGenre } from '../../store/moviesStore';
import { useSelector, useDispatch } from 'react-redux';

const ListGroup = () => {
  const genres = useSelector((state) => state.genres);
  const selectedGenre = useSelector((state) => state.selectedGenre);
  const dispatch = useDispatch();

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <>
      <div className='card-header'>Genres</div>
      <ul className='list-group'>
        {Object.keys(genres)
          .slice(0, 13)
          .map((genre) => (
            <li
              style={{ cursor: 'pointer' }}
              key={genre}
              className={
                genre === selectedGenre
                  ? 'list-group-item clickable active'
                  : 'list-group-item clickable'
              }
              onClick={() => dispatch(updateCurrentGenre(genre))}
            >
              {toTitleCase(genre)}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ListGroup;
