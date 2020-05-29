import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/moviesStore';
const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const { currentPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'}
          >
            <a
              className='page-link'
              onClick={() => dispatch(setCurrentPage(page))}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
