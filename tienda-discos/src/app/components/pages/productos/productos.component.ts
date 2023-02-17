import { Component } from '@angular/core';
import { ServicioService } from './../../../services/servicio.service';
import { FormatoDisco } from "../../../models/interfaces"

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  discos: FormatoDisco [] = [];
  grid: boolean = true;
  filteredDiscos: any = "";
  filter: string;

  constructor(private discosService:ServicioService){
    this.filter = "";
    this.filteredDiscos = this.discos;
  }

  ngOnInit(): void {
    this.discosService.getDiscos().subscribe((data:any)=>{
      this.discos = [...data]
    })
  }

  turntoGrid(){
    this.grid=true
  }

  turntoList(){
    this.grid=false
  }

  // onChangeFilter(filter: string) {
  //   const newList: string[] = this.discos.name.filter(el => el.toLowerCase().includes(filter.trim().toLowerCase()));
  //   this.filteredDiscos = newList;
  // }


}
