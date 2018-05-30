import { ActionReducerMap, Action, ActionReducer } from '@ngrx/store';
import * as fromComment from './comment.reducer';

export interface AppState {
  comments: fromComment.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
  comments: fromComment.reducer
};

export const initialState: AppState = {
  comments: fromComment.initialState
};
