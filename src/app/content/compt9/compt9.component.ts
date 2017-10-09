import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compt9',
  templateUrl: './compt9.component.html',
  styleUrls: ['./compt9.component.css']
})
export class Compt9Component implements OnInit {

   default_image : string = './assets/img/loading.gif';
   isLoading = true;
   errorImage = 'https://i.imgur.com/XKU4Ajf.png';
   defaultImage = './assets/img/loading.gif';
   image = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';

  constructor() { }

  ngOnInit() {
  }

}
