import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment/comment.model';

@Component({
  selector: 'eml-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent {
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
    this.updateFilteredComments();
  }

  onCommentDeleted(deletedComment: Comment) {
    const deletedIndex = this.comments.indexOf(deletedComment);
    this.comments.splice(deletedIndex, 1);
    this.updateFilteredComments();
  }

  private updateFilteredComments() {
    this.filteredComments = this.comments.filter((comment) => (
      (comment.author.includes(this.search.author) || this.search.author === null)
      && (comment.text.includes(this.search.text) || this.search.text === null)
    ));
  }
}