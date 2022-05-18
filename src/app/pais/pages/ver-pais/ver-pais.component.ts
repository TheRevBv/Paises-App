import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  // traducciones:Array<string> = Object.keys(this.pais.translations);

  constructor(private activatedRoute:ActivatedRoute, private paisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorId(id)),
      tap(console.log)
    )
    .subscribe(pais =>{
      this.pais = pais
      // console.log(res);
    });
    // this.activatedRoute.params
    // .subscribe(({id}) =>{
    //   console.log(id);
    //   this.paisService.getPaisPorId(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   })
    // })
  }
}
