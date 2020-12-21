import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:  HttpClient) {
    console.log('Producto Service Listo');
   }

   getNewReleases(){

  this.http.get('http://localhost:8081/api/producto').subscribe(data =>{
    console.log(data);
  });
}

}

