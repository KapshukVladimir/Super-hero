import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfoPageComponent } from './hero-info-page.component';

describe('HeroInfoPageComponent', () => {
  let component: HeroInfoPageComponent;
  let fixture: ComponentFixture<HeroInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
