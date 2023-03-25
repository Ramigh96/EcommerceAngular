import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsetcategoriesComponent } from './insetcategories.component';

describe('InsetcategoriesComponent', () => {
  let component: InsetcategoriesComponent;
  let fixture: ComponentFixture<InsetcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsetcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsetcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
