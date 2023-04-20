import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent {

constructor(
  private location : Location
) {}

goBack(){
  this.location.back();
}

}
