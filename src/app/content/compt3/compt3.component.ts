import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compt3',
  templateUrl: './compt3.component.html',
  styleUrls: ['./compt3.component.css']
})
export class Compt3Component implements OnInit {

  texto: string = "Angular ignores changes within (composite) objects. It won't call a pure pipe if you change an input month, add to an input array, or update an input object property.";
  constructor() { }

  ngOnInit() {
  }

}
