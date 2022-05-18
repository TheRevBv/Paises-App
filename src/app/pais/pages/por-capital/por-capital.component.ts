import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];

  // get paises() {
  //   return [...this.paisService];
  // }

  constructor(private paisService: PaisService) {}
  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.isError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(
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
