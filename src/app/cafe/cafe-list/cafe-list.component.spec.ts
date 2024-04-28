/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.cafes = [
      {
        id: 1,
        nombre: 'Café 1',
        tipo: 'Café de Origen',
        region: 'Región 1',
        sabor: 'sabor 1',
        altura: 1800,
        imagen: 'imagen 1',
      },
      {
        id: 3,
        nombre: 'Café 3',
        tipo: 'Café de Origen',
        region: 'Región 3',
        sabor: 'sabor 3',
        altura: 1700,
        imagen: 'imagen 3',
      },
      {
        id: 2,
        nombre: 'Café 2',
        tipo: 'Blend',
        region: 'Región 2',
        sabor: 'sabor 2',
        altura: 1850,
        imagen: 'imagen 2',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display table with header and three rows', () => {
    const tableElement: HTMLTableElement =
      fixture.nativeElement.querySelector('table');
    const headerRow = tableElement.querySelector('thead tr');
    const dataRows = tableElement.querySelectorAll('tbody tr');

    expect(headerRow).toBeTruthy();

    expect(dataRows.length).toBe(3);
  });
});
