import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

interface MyState {
  counter: number;
  foo: string;
  bar: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  initialState: MyState = {
    counter: 0,
    foo: 'bar',
    bar: true
  };

  messages$ = new Subject<string>();

  state$ = this.messages$.pipe(
    startWith('INIT'),
    scan(this.reducer, this.initialState)
  );

  reducer(state: MyState, message: string) {
    switch (message) {
      case 'INCREMENT': return { ...state, counter: state.counter + 1 };
      case 'DECREMENT': return { ...state, counter: state.counter - 1 };
      case 'RESET': return { ...state, counter: 0 };
      default: return state;
    }
  }

  constructor() {
    this.state$.subscribe(e => console.log(e));
  }
}
