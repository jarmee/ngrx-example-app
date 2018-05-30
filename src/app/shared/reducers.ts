import { ActionReducerMap, Action, ActionReducer } from '@ngrx/store';
import { reducer as comments, State as CommentState} from '../comment-with-ngrx/comment.reducer';

export interface AppState {
  comments: CommentState;
}

export const reducers: ActionReducerMap<AppState> = {
  comments
};
