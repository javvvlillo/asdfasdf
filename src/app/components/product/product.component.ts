import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService],
})
export class ProductComponent implements OnInit {

  product: any = '';
  descriptionIsShowing: boolean = false;
  nutritionalInfoIsShowing: boolean = false;
  

  constructor( private _productsService: ProductsService, private _route: ActivatedRoute, private _location: Location) { 
  }

  ngOnInit(): void {
    const code = this._route.snapshot.paramMap.get('code');

    if ( typeof code === 'string') this._productsService.getProduct(code).subscribe((res) => {

      if (res !== null) this.product = new ProductModel(res['codigo'], res['nombre'], res['precio'], res['descripcion'], res['image']);
      if(res ===null) this.product = null;
    });
  }
  
  description():void {
    this.descriptionIsShowing = !this.descriptionIsShowing;
  }
  nutritionalInfo(): void { }

  goBack():void {
    this._location.back();
  }
}
