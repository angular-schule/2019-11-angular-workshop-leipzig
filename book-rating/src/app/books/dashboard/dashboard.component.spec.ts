import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    // Duck Typing
    ratingMock = {
      rateUp: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for rateUp', () => {
    const rs = TestBed.get(BookRatingService);
    // and.callThrough: Aufruf zur originalen Methode durchleiten
    spyOn(rs, 'rateUp').and.callThrough();

    component.rateUp(book);

    expect(rs.rateUp).toHaveBeenCalled();
  });
});
