import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdaMainPageComponent } from './main.component';

describe('MainComponent', () => {
  let component: AcdaMainPageComponent;
  let fixture: ComponentFixture<AcdaMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcdaMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcdaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
