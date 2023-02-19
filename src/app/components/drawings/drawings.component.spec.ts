import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsComponent } from './drawings.component';

describe('DrawingsComponent', () => {
  let component: DrawingsComponent;
  let fixture: ComponentFixture<DrawingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
