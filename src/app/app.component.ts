import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  filter,
  concatMap,
  mergeMap,
  switchMap,
  exhaustMap,
  withLatestFrom,
  takeUntil,
  tap,
} from 'rxjs/operators';

import { SushiWithSoja, sushiBelt$, soja$, iWantThis, getSushiFromPlate, Plate } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  platesOnBelt: Plate[] = [];
  want = false;
  currentPlate: Plate = {
    contents: [],
    id: null,
  };
  index = 0;

  sushi$: Observable<SushiWithSoja> = sushiBelt$.pipe(
    tap(plate => this.index++),
    filter(plate => iWantThis(plate)),
    tap(plate => {
      this.want = true;
      this.currentPlate = plate;
      // TODO: Remove plate that was just grepped
    }),
    concatMap(plate => getSushiFromPlate(plate).pipe(withLatestFrom(soja$))),
    tap(item => {
      this.currentPlate.contents = [];
      this.want = false;
      console.log('item2:', item);
    }),
  );

  stop$ = new Subject();

  startSushi() {
    console.log('SUSHI STARTED 🍣🍣');

    sushiBelt$.pipe(takeUntil(this.stop$)).subscribe(plate => {
      console.log('🍽', plate.id, plate.contents);
      this.platesOnBelt.push(plate);
    });

    this.sushi$.pipe(takeUntil(this.stop$)).subscribe(sushi => {
      console.log('🍣', sushi);
    });
  }

  stopSushi() {
    this.stop$.next();
    console.log('SUSHI STOPPED 💥💥');
  }
}
