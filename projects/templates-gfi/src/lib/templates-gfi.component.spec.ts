import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesGfiComponent } from './templates-gfi.component';

describe('TemplatesGfiComponent', () => {
  let component: TemplatesGfiComponent;
  let fixture: ComponentFixture<TemplatesGfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesGfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesGfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
