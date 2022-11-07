import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CafeListComponent } from './cafe-list.component';
import { faker } from '@faker-js/faker';
import {DebugElement} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CafeService} from "../cafe.service";
import {Cafe} from "../cafe";
import {By} from "@angular/platform-browser";

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [ CafeService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.lastName(),
        faker.lorem.paragraph(3),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.lastName(),
        faker.lorem.paragraph(3),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.lastName(),
        faker.lorem.paragraph(3),
        faker.datatype.number(),
        faker.image.imageUrl()
      )
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an table title ', () => {
    const content: HTMLElement =debug.query(By.css('tr#encabezado')).nativeElement;
    expect(content.textContent).toEqual("#NombreTipoRegion")
  });
});
