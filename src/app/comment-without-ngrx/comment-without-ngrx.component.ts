import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment/comment.model';

@Component({
  selector: 'eml-comment-without-ngrx',
  templateUrl: './comment-without-ngrx.component.html',
  styleUrls: ['./comment-without-ngrx.component.css']
})
export class CommentWithoutNgrxComponent {
  comments: Comment[] = [
    { author: 'Harry', text: 'Fuck you' },
    { author: 'Jack', text: 'Fuck you' },
    { author: 'Biatsch', text: 'Fuck you' },
  ];

  filteredComments: Comment[] = this.comments;
  search: Comment = {
    author: null,
    text: null
  };

  onSearchComment(search: Comment) {
    this.search = search;
    this.filteredComments = this.comments.filter((comment) => (
      (comment.author.includes(search.author) || search.author === null)
      && (comment.text.includes(search.text) || search.text === null)
    ));
  }

  onCommentCreated(newComment: Comment) {
    this.comments = [
      ...this.comments,
      newComment
    ];

    this.filteredComments = this.comments.filter((comment) => (
      (comment.author.includes(this.search.author) || this.search.author === null)
      && (comment.text.includes(this.search.text) || this.search.text === null)
    ));
  }
}
