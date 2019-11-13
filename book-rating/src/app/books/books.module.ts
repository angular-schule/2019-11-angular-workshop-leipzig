import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookRatingService } from './shared/book-rating.service';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
