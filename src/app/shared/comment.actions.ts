import { Action } from '@ngrx/store';
import { Comment } from './comment/comment.model';

export enum ActionTypes {
  CreateComment = '[Comment] Comment created',
  FilterComments = '[Comments] Filter comments',
  DeleteComment = '[Comments] Delete comment'
}

export class CreateCommentAction implements Action {
  readonly type: ActionTypes = ActionTypes.CreateComment;
  constructor(public payload: Comment) {}
}

export class FilterCommentsAction implements Action {
  readonly type: ActionTypes = ActionTypes.FilterComments;
  constructor(public payload: Comment) {}
}

export class DeleteCommentAction implements Action {
  readonly type: ActionTypes = ActionTypes.DeleteComment;
  constructor(public payload: Comment) {}
}

export type Actions = CreateCommentAction | FilterCommentsAction | DeleteCommentAction;
