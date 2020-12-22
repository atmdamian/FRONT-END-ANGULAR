import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../producto/registrar/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getNewReleases(){
    return this.http.get('http://localhost:8081/api/producto');   
  }

  crearProducto(producto: ProductoModel ){
    console.log(producto,'::::');
    return this.http.post('http://localhost:8081/api/producto/agregar',producto);
  }
  
}
