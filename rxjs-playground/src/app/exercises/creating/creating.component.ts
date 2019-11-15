import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

     /*this.myObservable$ = new Observable(obs => {
       obs.next('Hallo Leipzig');
       setTimeout(() => obs.next('Verzögert'), 2000);
       setTimeout(() => obs.complete(), 3000);
       setTimeout(() => obs.next('kommt nicht an'), 4000);

       for (let i = 0; i < 10; i++) {
         obs.next(i);
       }
     });*/


     this.myObservable$ = timer(2000, 1000).pipe(
       map(e => e * 100),
       filter(e => e > 1000)
     );


  }

}
