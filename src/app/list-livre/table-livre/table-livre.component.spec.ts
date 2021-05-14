import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLivreComponent } from './table-livre.component';

describe('TableLivreComponent', () => {
  let component: TableLivreComponent;
  let fixture: ComponentFixture<TableLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
