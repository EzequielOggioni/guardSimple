import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgunosComponent } from './algunos.component';

describe('AlgunosComponent', () => {
  let component: AlgunosComponent;
  let fixture: ComponentFixture<AlgunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
