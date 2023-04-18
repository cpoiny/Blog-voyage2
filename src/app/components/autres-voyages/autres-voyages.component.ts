import { Component } from '@angular/core';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-autres-voyages',
  templateUrl: './autres-voyages.component.html',
  styleUrls: ['./autres-voyages.component.css']
})
export class AutresVoyagesComponent {

  voyages : IVoyage[]= VOYAGES;

  voyagesAdecouvrir = this.voyages.filter((voyage: IVoyage)=> voyage.isActive === false);

}
