import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffliationComponent } from './affliation.component';

describe('AffliationComponent', () => {
  let component: AffliationComponent;
  let fixture: ComponentFixture<AffliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
