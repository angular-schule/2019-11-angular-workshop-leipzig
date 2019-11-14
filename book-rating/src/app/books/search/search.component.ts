import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .subscribe(e => console.log(e));
  }

}
