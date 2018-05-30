import { ActionReducer } from '@ngrx/store';
import { Comment } from '../shared/comment/comment.model';
import { Actions } from './comment.actions';

export interface State {
  comments: Comment[];
}

const initialState: State = {
  comments: []
};

export const reducer: ActionReducer<State, Actions> = (state: State = initialState, action: Actions) => {
  return state;
};
