import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  catalogoProductos : any[]=[];

  constructor( private productos :ProductoService) {
    this.productos.getNewReleases().subscribe((data: any)=>{
      console.log(data);
      this.catalogoProductos = data;
    }); 
    
   }

}
