import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosaleComponent } from './nosale.component';

describe('NosaleComponent', () => {
  let component: NosaleComponent;
  let fixture: ComponentFixture<NosaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
