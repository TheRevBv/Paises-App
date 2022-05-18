import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];

  // get paises() {
  //   return [...this.paisService];
  // }

  constructor(private paisService: PaisService) {}

  buscar() {
    this.isError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {
        this.isError = true;
        this.paises = [];
        console.log('error', err);
      }
    );
  }
}
