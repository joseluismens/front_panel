import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideClienteComponent } from './aside-cliente.component';

describe('AsideClienteComponent', () => {
  let component: AsideClienteComponent;
  let fixture: ComponentFixture<AsideClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
