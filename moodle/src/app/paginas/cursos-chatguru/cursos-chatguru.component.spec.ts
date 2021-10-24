import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosChatguruComponent } from './cursos-chatguru.component';

describe('CursosChatguruComponent', () => {
  let component: CursosChatguruComponent;
  let fixture: ComponentFixture<CursosChatguruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosChatguruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosChatguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
