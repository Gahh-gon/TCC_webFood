import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIniComponent } from './formulario-ini.component';

describe('FormularioIniComponent', () => {
  let component: FormularioIniComponent;
  let fixture: ComponentFixture<FormularioIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
