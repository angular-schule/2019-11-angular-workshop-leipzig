import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  logStream$ = new Subject<string>();

  ngOnInit() {

    /******************************/
    /**
     * Führe die Nachrichten aller Teilnehmer in
     * einem Datenstrom zusammen. Abonniere den Datenstrom
     * und gib die Nachrichten mithilfe der Methode
     * this.log() aus.
     * - merge (Turn multiple observables into a single observable.)
     * - concat (Emit values from source 1, when complete, subscribe to source 2...)
     * - race (The observable to emit first is used.)
     * - forkJoin (When all observables complete, emit the last emitted value from each.)
     */

    forkJoin([
      this.msg.julia$.pipe(map(msg => 'JULIA: ' + msg)),
      this.msg.georg$.pipe(map(msg => 'GEORG: ' + msg)),
      this.msg.john$.pipe(map(msg => 'JOHN: ' + msg)),
    ]).subscribe(
      msg => this.log(msg),
      () => this.log('FEHLER'),
      () => this.log('All members left')
    );

    // Exkurs: startWith selbst bauen
    const myObservable$ = of(1,2,3);
    concat(of(0), myObservable$).subscribe(console.log);

    /******************************/
  }

  private log(msg: any) {
    this.logStream$.next(msg.toString());
  }
}
