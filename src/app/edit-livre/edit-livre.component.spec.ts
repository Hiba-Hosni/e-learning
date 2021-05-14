import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLivreComponent } from './edit-livre.component';

describe('EditLivreComponent', () => {
  let component: EditLivreComponent;
  let fixture: ComponentFixture<EditLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
