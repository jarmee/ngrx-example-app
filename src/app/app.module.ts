import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRootModule, StoreModule, ActionReducerMap } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CommentSectionModule } from './comment-section/comment-section.module';
import * as fromComment from './shared/comment.reducer';
import { reducers, AppState } from './shared/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<AppState>
>('Registered Reducers');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    CommentSectionModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useValue: reducers
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
