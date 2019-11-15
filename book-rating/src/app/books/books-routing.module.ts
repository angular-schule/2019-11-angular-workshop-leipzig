import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CounterComponent } from './counter/counter.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'counter', component: CounterComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
