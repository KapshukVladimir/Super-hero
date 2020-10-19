import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalItemComponent } from './alphabetical-item.component';

describe('AlphabeticalItemComponent', () => {
  let component: AlphabeticalItemComponent;
  let fixture: ComponentFixture<AlphabeticalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabeticalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
