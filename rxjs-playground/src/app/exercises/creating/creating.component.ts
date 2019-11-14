import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  myObservable$: Observable<number | string>;

  ngOnInit() {
    /**
     * Erstelle ein Observable und schreibe es in this.myObservable$
     */


  }

}
