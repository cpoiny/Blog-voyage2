import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresImagesComponent } from './autres-images.component';

describe('AutresImagesComponent', () => {
  let component: AutresImagesComponent;
  let fixture: ComponentFixture<AutresImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutresImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutresImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
