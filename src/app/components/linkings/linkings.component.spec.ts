import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingsComponent } from './linkings.component';

describe('LinkingsComponent', () => {
  let component: LinkingsComponent;
  let fixture: ComponentFixture<LinkingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
