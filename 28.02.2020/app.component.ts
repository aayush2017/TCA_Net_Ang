import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'pari';
  // btntxt:string='login';
  // name1: string='Parizat';

  text: number;
  button:string;
  color: string;
  getbuttonvalue():string{
    if(this.text == null)
    {
      return this.color='white';
    }
    else
    if(this.text>10)
    {
      return this.color='green';
    }
    else{
      return this.color='red';
    }
   
  };
}
