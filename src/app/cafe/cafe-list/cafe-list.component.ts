import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafesPorTipo: { [tipo: string]: number } = {};

  constructor(private cafeService: CafeService) {}

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.calcularVariedadesPorTipo();
    });
  }

  ngOnInit(): void {
    this.getCafes();
  }

  private calcularVariedadesPorTipo(): void {
    this.cafesPorTipo = {};
    this.cafes.forEach((cafe) => {
      if (this.cafesPorTipo[cafe.tipo]) {
        this.cafesPorTipo[cafe.tipo]++;
      } else {
        this.cafesPorTipo[cafe.tipo] = 1;
      }
    });
    console.log(this.cafesPorTipo);
  }
}
