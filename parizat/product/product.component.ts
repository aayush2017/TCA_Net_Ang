import { Component } from '@angular/core';
import {productService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
product:any[];
constructor(private _productservice:productService){
this.product= _productservice.getproduct();
}
color: string;
getcolor(i:number):string{
  if(this.product[i].stock>10)
  {
 return this.color='green';
  }
  else{
   return this.color='red';
  }
}

getvalue(updatestock:number, i:number){
this.product[i].stock= updatestock;
}
}
