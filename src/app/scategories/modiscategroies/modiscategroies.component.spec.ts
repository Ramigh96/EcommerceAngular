import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiscategroiesComponent } from './modiscategroies.component';

describe('ModiscategroiesComponent', () => {
  let component: ModiscategroiesComponent;
  let fixture: ComponentFixture<ModiscategroiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiscategroiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiscategroiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
