import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarConsultaComponent } from './agendar-consulta.component';

describe('AgendarConsultaComponent', () => {
  let component: AgendarConsultaComponent;
  let fixture: ComponentFixture<AgendarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendarConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
