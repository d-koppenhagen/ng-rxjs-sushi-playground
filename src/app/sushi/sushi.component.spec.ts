import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushiComponent } from './sushi.component';

describe('SushiComponent', () => {
  let component: SushiComponent;
  let fixture: ComponentFixture<SushiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
