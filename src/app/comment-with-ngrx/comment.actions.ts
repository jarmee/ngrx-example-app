import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadComments = '[Comment] Load comments',
  CommentsLoaded = '[Comment] comments loaded'
}

export class LoadCommentsAction implements Action {
  readonly type = ActionTypes.LoadComments;
}

export class CommentsLoadedAction implements Action {
  readonly type = ActionTypes.CommentsLoaded;

  constructor(public payload: Action[]) {}
}

export type Actions = LoadCommentsAction | CommentsLoadedAction;
