import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootingsComponent } from './troubleshootings.component';

describe('TroubleshootingsComponent', () => {
  let component: TroubleshootingsComponent;
  let fixture: ComponentFixture<TroubleshootingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleshootingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroubleshootingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
