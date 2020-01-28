import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
updatestock: number;
@Input() stock:number;
@Input() productid: number;
@Output() stockvaluechange = new EventEmitter();
stockvaluechanged(){
this.stockvaluechange.emit({updatestock:this.updatestock, id:this.productid});
this.updatestock= null;
}
color:string;
getcolor(): string {
if (this.stock>10)
{
  return this.color='green';
}
else{
  return this.color='red';
}
};
  
}
