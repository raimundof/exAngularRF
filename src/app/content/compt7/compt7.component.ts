import { Component, OnInit } from '@angular/core';
import { ServimapService } from '../../series/services/servimap.service';

@Component({
  selector: 'app-compt7',
  templateUrl: './compt7.component.html',
  styleUrls: ['./compt7.component.css']
})
export class Compt7Component implements OnInit {
  title: string = 'My direccion';


  zoom: number = 16; 

  coordinates = [];

  constructor(private markers : ServimapService) {
    this.coordinates = markers.coordinates;
    console.log(this.coordinates);
   }

  ngOnInit() {
  }

}
