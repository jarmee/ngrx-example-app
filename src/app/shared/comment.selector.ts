import { State } from './comment.reducer';
import { AppState } from './reducers';

export const getAll = () => {
  return (state: AppState) => state.comments.comments;
};


export const getCount = () => {
  return (state: AppState) => getAll()(state).length;
};

export const getFiltered = () => {
  return (state: AppState) => getAll()(state)
                                .filter((comment) => (
                                  (comment.author.includes(state.comments.filterBy.author)
                                   || !state.comments.filterBy.author)
                                  && (comment.text.includes(state.comments.filterBy.text)
                                  || !state.comments.filterBy.text)))
                                .reverse();
};

export const getFilteredCount = () => {
  return (state: AppState) => getFiltered()(state).length;
};
