import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCateComponent } from './formulario-cate.component';

describe('FormularioCateComponent', () => {
  let component: FormularioCateComponent;
  let fixture: ComponentFixture<FormularioCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
