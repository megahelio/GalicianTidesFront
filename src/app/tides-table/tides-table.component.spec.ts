import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidesTableComponent } from './tides-table.component';

describe('TidesTableComponent', () => {
  let component: TidesTableComponent;
  let fixture: ComponentFixture<TidesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TidesTableComponent]
    });
    fixture = TestBed.createComponent(TidesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
