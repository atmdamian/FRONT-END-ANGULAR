import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClientModule) {
   this.http.get('http://localhost:8081/api/producto').subscribe(data=>{
     console.log(data);
   });
   }
}
