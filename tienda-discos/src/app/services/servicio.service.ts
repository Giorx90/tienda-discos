import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormatoDisco } from '../models/interfaces';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable ()
export class ServicioService {

  dbjson: string = "http://localhost:3000/discos"

  constructor(private http: HttpClient) {}

  public discoData = {
    id: 0,
    name: "Título",
    price: 0,
    author: "Autor",
    stars: 0,
    image: "./assets/disco-vinilo.jpg"
  }

  getDiscos() {
    return this.http.get(this.dbjson)
  }

  postDisco(disco : FormatoDisco) {
    return this.http.post(this.dbjson, disco)
  }

}
