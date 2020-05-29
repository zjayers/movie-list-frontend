/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../../store/moviesStore';
import _ from 'lodash';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const [input] = e.target.children;
    dispatch(updateSearchTerm(input.value));
  };

  const debouncedChange = _.debounce((value) => {
    dispatch(updateSearchTerm(value));
  }, 300);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Movie List
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/'>
              Movies
            </NavLink>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='https://movie-list-ayers.herokuapp.com/api/v1/'
            >
              API
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0' onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              debouncedChange(e.target.value);
            }}
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
