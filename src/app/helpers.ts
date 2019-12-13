import { Observable, timer, interval, Subject } from 'rxjs';
import { take, map, share, tap } from 'rxjs/operators';

export type Sushi = string;

type Soja = 'SOJA';
const soja: Soja = 'SOJA';

export type SushiWithSoja = [Sushi, Soja];

export interface Plate {
  contents: Sushi[];
  id: number;
}

const plates: Plate[] = [
  { contents: ['A', 'B', 'A'], id: null },
  { contents: ['B', 'B'], id: null },
  { contents: ['A', 'B', 'C'], id: null },
  { contents: ['C', 'C', 'A'], id: null },
  { contents: ['A'], id: null },
];

// soja stream
const sojaSubject$ = new Subject<Soja>();
export const soja$ = sojaSubject$.asObservable();
timer(0, 600)
  .pipe(map(() => soja))
  .subscribe(sojaSubject$);

// The sushi belt itself which provides plates with sushi
export const sushiBelt$: Observable<Plate> = timer(100, 2000).pipe(
  map(id => ({ ...plates[randomNumber(0, plates.length)], id })),
  share(),
);

function randomNumber(min = 0, max = 5000): number {
  return Math.floor(Math.random() * max + min);
}

// predicate function to decide whether we want take a plate or not
export function iWantThis(plate: Plate): boolean {
  const want = Math.random() > 0.6;
  if (want) {
    console.log('🤩 I WANT THIS! Plate ' + plate.id);
  }

  return want;
}

// convert plate to Observable of plate contents
export function getSushiFromPlate(plate: Plate): Observable<Sushi> {
  return timer(randomNumber(), randomNumber()).pipe(
    take(plate.contents.length),
    map(i => plate.contents[i] + ' ' + plate.id),
  );
}
