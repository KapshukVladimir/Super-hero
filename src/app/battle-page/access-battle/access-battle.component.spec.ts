import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessBattleComponent } from './access-battle.component';

describe('AccessBattleComponent', () => {
  let component: AccessBattleComponent;
  let fixture: ComponentFixture<AccessBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
