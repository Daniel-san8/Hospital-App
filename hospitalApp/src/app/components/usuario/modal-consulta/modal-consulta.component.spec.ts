import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultaComponent } from './modal-consulta.component';

describe('ModalConsultaComponent', () => {
  let component: ModalConsultaComponent;
  let fixture: ComponentFixture<ModalConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
