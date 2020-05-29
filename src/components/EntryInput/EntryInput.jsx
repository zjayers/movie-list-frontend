import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { movieAdded } from '../../store/moviesStore';

const EntryInput = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [input] = e.target.children;

    if (input.value === '') {
      return;
    }

    const movieObj = {
      _id: Math.random(),
      name: input.value,
      year: 2020,
      runtime: Math.floor(Math.random() * (220 - 110 + 1)) + 110,
      categories: [
        Object.keys(genres)[
          Math.floor(Math.random() * Object.keys(genres).length)
        ],
      ],
      'release-date': '2003-06-06',
      director: 'Hack Reactor',
      writer: ['Gary Scott Thompson', 'Michael Brandt', 'Derek Haas'],
      actors: [
        'Paul Walker',
        'Tyrese Gibson',
        'Chris Ludacris Bridges',
        'Eva Mendes',
        'Cole Hauser',
      ],
      storyline: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    };

    dispatch(movieAdded(movieObj));

    input.value = '';
  };

  return (
    <form className='input-group mb-3 col-sm-10' onSubmit={handleSubmit}>
      <input
        type='text'
        className='form-control'
        placeholder='Add Movie'
        aria-label='Add Movie'
      />
      <div className='input-group-append'>
        <button className='btn btn-outline-secondary' type='submit'>
          Add
        </button>
      </div>
    </form>
  );
};

export default EntryInput;
