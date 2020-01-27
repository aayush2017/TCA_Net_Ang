import { Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent{
updatestock: number;
@Input() color: string;
@Output() event=new EventEmitter<number>(); 
 change(){
   this.event.emit(this.updatestock);
   this.updatestock= null;
 }
}
