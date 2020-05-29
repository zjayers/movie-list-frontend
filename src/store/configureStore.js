import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './moviesStore';
import api from './middleware/api';

export default () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
  });
