import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommentComponent } from './shared/comment/comment.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/reducers';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      reducers
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
