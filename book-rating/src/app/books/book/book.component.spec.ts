import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Buch in die Komponente schreiben
    // wichtig: VOR detectChanges()
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for rateUp', () => {

    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    component.doRateUp();

    expect(emittedBook).toBeTruthy();
    expect(emittedBook).toBe(component.book);

  });

  it('should call method for btn click', () => {

    // Button holen
    const rateUpBtn: HTMLButtonElement = fixture.nativeElement
      .querySelector('[data-testid="rateUpBtn"]');


    // feststellen, ob die Methode aufgerufen wurde
    spyOn(component, 'doRateUp');

    // Klicken
    rateUpBtn.click();

    expect(component.doRateUp).toHaveBeenCalled();

  });
});
