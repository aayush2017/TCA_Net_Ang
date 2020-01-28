import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  title:string='Product';
product: any[]=[{id:'1', title:'hjdgyu', price:'300', stock:'23'},
{id:'2', title:'ahshshwsg', price:'100', stock:'9'},
{id:'3', title:'ndsu', price:'50', stock:'20'}];
producttoupdate:any;
changestockvalue(p){
  this.producttoupdate= this.product.find(this.findproducts, [p.id]);
  this.producttoupdate.stock= this.producttoupdate.stock + p.updatestock;
}
findproducts(p){
  return p.id === this[0];
}

}
