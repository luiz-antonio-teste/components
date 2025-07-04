import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNews } from './card-news';

describe('CardNews', () => {
  let component: CardNews;
  let fixture: ComponentFixture<CardNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
