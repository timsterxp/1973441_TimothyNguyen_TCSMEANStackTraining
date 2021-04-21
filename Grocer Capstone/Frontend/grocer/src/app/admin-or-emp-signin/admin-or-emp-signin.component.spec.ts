import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrEmpSigninComponent } from './admin-or-emp-signin.component';

describe('AdminOrEmpSigninComponent', () => {
  let component: AdminOrEmpSigninComponent;
  let fixture: ComponentFixture<AdminOrEmpSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrEmpSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrEmpSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
