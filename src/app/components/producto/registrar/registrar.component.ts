import { Component, OnInit } from '@angular/core';
import { ProductoModel } from './producto.model';
import { NgForm } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  producto = new ProductoModel();
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }

  onSubmit(data: NgForm){
    this.productoService.crearProducto(data.value)
    .subscribe(resp =>{
      console.log(resp);
    });
  }

}
