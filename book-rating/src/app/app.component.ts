import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {


    function producer(o) {
      o.next(1);
      o.next(2);

      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 3000);
      setTimeout(() => o.complete(), 4000);
    }

    const myObserver = {
      // next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('Cool')
    }

    // producer(myObserver);

    const myObservable$ = new Observable(producer);

    myObservable$.subscribe(myObserver);

/*    setTimeout(() => {
      myObservable$.subscribe(
        e => console.log(e)
      );
    }, 1000)*/



  }
}
