import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(term => this.bs.search(term))
    );
  }

}
/*
- Suchbegriff mindestens 3 Zeichen lang
- erst suchen, wenn für bestimtme Zeit Finger stillgehalten
- niemals zwei gleiche Suchen hintereinander
- für jeden Suchbegriff HTTP-Request machen (this.bs.search => Book[])
- Ergebnisse anzeigen (nur die Titel)

Extra:
- Ladeanzeige
- Link zum Buch
*/
