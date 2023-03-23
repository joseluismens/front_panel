import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspeccionClienteComponent } from './prospeccion-cliente.component';

describe('ProspeccionClienteComponent', () => {
  let component: ProspeccionClienteComponent;
  let fixture: ComponentFixture<ProspeccionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProspeccionClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspeccionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
