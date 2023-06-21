import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MotosService {

  motos: any = []

  constructor(private http: HttpClient ) {
    this.http.get("https://motos-86778-default-rtdb.firebaseio.com/motos.json")
    .subscribe((resp:any)=>{
      this.motos = resp;
      console.log(this.motos)
    })
  }
  loadMotos(){
    console.log("Loading Data")

  }
}
