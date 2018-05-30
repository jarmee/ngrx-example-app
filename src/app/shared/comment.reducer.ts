import { Comment, emptyComment } from './comment/comment.model';
import { ActionReducer, Action } from '@ngrx/store';
import { Actions, ActionTypes, CreateCommentAction, FilterCommentsAction, DeleteCommentAction } from './comment.actions';
import { fakeComments } from '../test/data/comment';

export interface State {
  comments: Comment[];
  filterBy: Comment;
}

export const initialState: State = {
  comments: fakeComments,
  filterBy: emptyComment
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CreateComment:
      return {
        ...state,
        comments: [
          ...state.comments,
          (action as CreateCommentAction).payload
        ]
      };
      case ActionTypes.DeleteComment:
        const toDelete = (action as DeleteCommentAction).payload;
        const index = state.comments.indexOf(toDelete);
        return {
          ...state,
          comments: [
            ...state.comments.slice(0, index),
            ...state.comments.slice(index + 1)
          ]
        };
    case ActionTypes.FilterComments:
      return {
        ...state,
        filterBy: (action as FilterCommentsAction).payload
      };
  }
  return state;
}
