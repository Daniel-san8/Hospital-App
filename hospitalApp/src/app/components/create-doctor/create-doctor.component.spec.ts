import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorComponent } from './create-doctor.component';

describe('CreateDoctorComponent', () => {
  let component: CreateDoctorComponent;
  let fixture: ComponentFixture<CreateDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
