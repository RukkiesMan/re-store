import * as actionTypes from '../action-types';

const booksRequested = () => ({
  type: actionTypes.FETCH_BOOKS_REQUEST,
});

const booksLoaded = newBooks => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  payload: newBooks,
});

const booksError = error => ({
  type: actionTypes.FETCH_BOOKS_FAILURE,
  payload: error,
});

const fetchBooks = (bookstoreService, dispatch) => async () => {
  dispatch(booksRequested());

  try {
    const data = await bookstoreService.getBooks();
    dispatch(booksLoaded(data));
  } catch (error) {
    dispatch(booksError(error));
  }
};

export {
  fetchBooks,
};
