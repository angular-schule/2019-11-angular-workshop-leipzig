import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$ = this.stateService.state$.pipe(
    map(state => state.counter)
  );

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  increment() {
    this.stateService.messages$.next('INCREMENT');
  }

  decrement() {
    this.stateService.messages$.next('DECREMENT');
  }

  reset() {
    this.stateService.messages$.next('RESET');
  }

}
