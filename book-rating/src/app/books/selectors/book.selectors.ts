import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducers/book.reducer';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const getBooksLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const getAllBooks = createSelector(
  selectBookState,
  state => state.books
);
