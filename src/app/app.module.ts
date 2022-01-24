import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentInputComponent } from './content-input';
import { TitleInputComponent } from './title-input';
import { AuthorInputComponent } from './author-input/author-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentInputComponent,
    TitleInputComponent,
    AuthorInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
