import { Component } from '@angular/core';
import { ServicioService } from './../../../services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //prueba para ver si el servicio funciona
  discos: any [] = [];

  constructor(private discosService:ServicioService){}

  ngOnInit(): void {
    this.discosService.getDiscos().subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}

//FUNCIONAAAAAAA!!
