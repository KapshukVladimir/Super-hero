import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSelectComponent } from './alphabetical-select.component';

describe('AlphabeticalSelectComponent', () => {
  let component: AlphabeticalSelectComponent;
  let fixture: ComponentFixture<AlphabeticalSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabeticalSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
