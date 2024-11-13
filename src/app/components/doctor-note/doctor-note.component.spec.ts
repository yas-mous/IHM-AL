import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorNoteComponent } from './doctor-note.component';

describe('DoctorNoteComponent', () => {
  let component: DoctorNoteComponent;
  let fixture: ComponentFixture<DoctorNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
