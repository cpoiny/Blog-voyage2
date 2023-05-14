import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-autres-voyages',
  templateUrl: './autres-voyages.component.html',
  styleUrls: ['./autres-voyages.component.css']
})
export class AutresVoyagesComponent {

  // je récuère toute ma liste de voyages
  voyages: IVoyage[] = VOYAGES;

  // catégorie des autres voyages
  voyagesAdecouvrir = this.voyages.filter((voyage: IVoyage) => voyage.isActive === false);

}
