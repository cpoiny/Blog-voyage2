import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierArticleComponent } from './dernier-article.component';

describe('DernierArticleComponent', () => {
  let component: DernierArticleComponent;
  let fixture: ComponentFixture<DernierArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernierArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DernierArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
