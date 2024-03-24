import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUtenteComponent } from './header-utente.component';

describe('HeaderUtenteComponent', () => {
  let component: HeaderUtenteComponent;
  let fixture: ComponentFixture<HeaderUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderUtenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
