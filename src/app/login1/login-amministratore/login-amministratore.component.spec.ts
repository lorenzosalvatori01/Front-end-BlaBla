import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAmministratoreComponent } from './login-amministratore.component';

describe('LoginAmministratoreComponent', () => {
  let component: LoginAmministratoreComponent;
  let fixture: ComponentFixture<LoginAmministratoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAmministratoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
