import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable ()
export class ServicioService {

  dbjson: string = "http://localhost:3000/discos"

  constructor(private http: HttpClient) {}

  getDiscos() {
    return this.http.get(this.dbjson)
  }

}
