import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchalasiaComponent } from './achalasia.component';

describe('AchalasiaComponent', () => {
  let component: AchalasiaComponent;
  let fixture: ComponentFixture<AchalasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchalasiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchalasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
