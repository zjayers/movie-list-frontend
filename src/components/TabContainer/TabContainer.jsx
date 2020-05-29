import React from 'react';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux';
import paginate from '../../utils/paginate';
import Pagination from '../shared/Pagination';

const TabContainer = () => {
  const pageSize = 7;
  const {
    movies,
    searchTerm,
    selectedGenre,
    currentPage,
    watched,
  } = useSelector((state) => state);

  const filteredMovies = movies
    .filter(
      (movie) =>
        selectedGenre === 'all' || movie.categories[0] === selectedGenre,
    )
    .filter((movie) =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const moviePartitions = _.partition(
    filteredMovies,
    (movie) => watched[movie._id] === false,
  );

  const paginatedWatched = paginate(moviePartitions[0], currentPage, pageSize);
  const paginatedUnWatched = paginate(
    moviePartitions[1],
    currentPage,
    pageSize,
  );

  return (
    <div>
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <a
            className='nav-item nav-link active'
            id='nav-to-watch-tab'
            data-toggle='tab'
            href='#nav-to-watch'
            role='tab'
            aria-controls='nav-to-watch'
            aria-selected='true'
          >
            To Watch
          </a>
          <a
            className='nav-item nav-link'
            id='nav-watched-tab'
            data-toggle='tab'
            href='#nav-watched'
            role='tab'
            aria-controls='nav-watched'
            aria-selected='false'
          >
            Watched
          </a>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade show active'
          id='nav-to-watch'
          role='tabpanel'
          aria-labelledby='nav-to-watch-tab'
        >
          <MovieList movies={paginatedWatched} />
          <Pagination
            itemsCount={moviePartitions[0].length}
            pageSize={pageSize}
          />
        </div>
        <div
          className='tab-pane fade'
          id='nav-watched'
          role='tabpanel'
          aria-labelledby='nav-watched-tab'
        >
          <MovieList movies={paginatedUnWatched} />
          <Pagination
            itemsCount={moviePartitions[1].length}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
