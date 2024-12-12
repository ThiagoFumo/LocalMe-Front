import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMainComponent } from './pagina-main.component';

describe('PaginaMainComponent', () => {
  let component: PaginaMainComponent;
  let fixture: ComponentFixture<PaginaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
