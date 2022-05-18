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

  buscar(termino:string) {
    this.isError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.isError = true;
        this.paises = [];
        console.log('error', err);
      }
    );
  }

  sugerencias(termino:string){
    this.isError = false;
    //TODO: Crear sugerencias
  }

}
