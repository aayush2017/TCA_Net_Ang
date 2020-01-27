import { Injectable } from '@angular/core';

@Injectable()
export class productService{
   getproduct():any[] {
       return[
           {id:'1', title:'abc', price:'500',stock:'19'},
    {id:'2', title:'xyz', price:'200', stock:'29'}
];
}
}