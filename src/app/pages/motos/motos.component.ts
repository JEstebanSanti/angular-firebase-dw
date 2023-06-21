import { Component } from '@angular/core';
import { MotosService } from 'src/app/services/motos.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.scss']
})
export class MotosComponent {
  motos: any[]=[]
  constructor( public motosSV: MotosService){
    
  }
}
