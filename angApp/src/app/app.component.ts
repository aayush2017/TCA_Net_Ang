import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angApp';
  public isT = true;
  public text = {
    "text-red": this.isT,
    "text-green": !this.isT 
  }
}
