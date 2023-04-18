import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresVoyagesComponent } from './autres-voyages.component';

describe('AutresVoyagesComponent', () => {
  let component: AutresVoyagesComponent;
  let fixture: ComponentFixture<AutresVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutresVoyagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutresVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
