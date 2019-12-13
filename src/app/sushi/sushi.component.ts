import { Component, OnInit, Input } from '@angular/core';

import { Sushi } from '../helpers';

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.css'],
})
export class SushiComponent implements OnInit {
  @Input() data: Sushi;

  constructor() {}

  ngOnInit() {}
}
