import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import * as movieActions from './store/moviesStore';
import App from './components/App/App';
import configureStore from './store/configureStore';

import './index.styles.css';

const store = configureStore();
store.dispatch(movieActions.movieApiCallBegan({ searchTerm: 'Superman' }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
