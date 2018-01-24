import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatepositionComponent } from './alternateposition.component';

describe('AlternatepositionComponent', () => {
  let component: AlternatepositionComponent;
  let fixture: ComponentFixture<AlternatepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternatepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternatepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
