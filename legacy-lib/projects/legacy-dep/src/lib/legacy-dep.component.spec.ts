import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyDepComponent } from './legacy-dep.component';

describe('LegacyDepComponent', () => {
  let component: LegacyDepComponent;
  let fixture: ComponentFixture<LegacyDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
