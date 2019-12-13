import { Component, OnInit, Input } from '@angular/core';

import { Plate } from '../helpers';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css'],
})
export class PlateComponent implements OnInit {
  @Input() data: Plate;

  constructor() {}

  ngOnInit() {}
}
