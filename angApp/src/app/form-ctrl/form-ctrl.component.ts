import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ctrl',
  template: `
    <p>
      form-ctrl works!
    </p>
    <form #userform>
      {{ userForm.value | json}}
    <p><label>Fullname <input type="text" name="fullname" ngModel> </label></p>
    </form>
  `,
  styles: []
})
export class FormCtrlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
