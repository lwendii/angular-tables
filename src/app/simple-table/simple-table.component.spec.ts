import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableComponent } from './normal-table.component';

describe('NormalTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
