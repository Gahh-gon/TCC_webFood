import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KichenPageComponent } from './kichen-page.component';

describe('KichenPageComponent', () => {
  let component: KichenPageComponent;
  let fixture: ComponentFixture<KichenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KichenPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KichenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
