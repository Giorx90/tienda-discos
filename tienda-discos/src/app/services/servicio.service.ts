import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable ()
export class ServicioService {

  dbjson: string = "http://localhost:3000/discos"

  constructor(private http: HttpClient) {}

  public discoData = {
    id: "",
    name: "",
    price: "",
    author: "",
    stars: "",
    image: ""
  }

  getDiscos() {
    return this.http.get(this.dbjson)
  }

  postDisco(disco : any) {
    return this.http.post(this.dbjson, disco)
  }

}
