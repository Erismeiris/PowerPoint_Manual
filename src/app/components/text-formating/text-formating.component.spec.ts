import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormatingComponent } from './text-formating.component';

describe('TextFormatingComponent', () => {
  let component: TextFormatingComponent;
  let fixture: ComponentFixture<TextFormatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFormatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFormatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
