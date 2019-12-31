import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-c',
  templateUrl: './app-c.component.html',
  styleUrls: ['./app-c.component.scss']
})
export class AppCComponent implements OnInit {

  constructor() { }
  public names = [
    { name: "Kamal"},
    { name: "Mitchel"},
    { name: "Yoon"},
    { name: "Johnson"},
    { name: "Jet Li"}
  ];

  employee =[
    {empName: "John Corter", empID: "1001", empDOJ: "20 Nov 2019", empSal: "25 K"},
    {empName: "Mickle", empID: "1002", empDOJ: "1 Dec 2019", empSal: "30 K"},
  ];

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  ngOnInit() {
  }

}
