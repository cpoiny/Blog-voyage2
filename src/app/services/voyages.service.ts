import { Injectable } from '@angular/core';
import { IVoyage, VOYAGES } from '../voyage.mock';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  // je recupère mon mock avec tous les voyages
  voyages: IVoyage[] = VOYAGES;
  voyageSelected?: IVoyage;

  // j'importe les constructeurs
  constructor(public activatedRoute: ActivatedRoute) { }

  //je recupére le dernier voyage
  getMainVoyage() {
    const lastConsulte = this.voyages.filter((voyage: IVoyage) => voyage.isActive === true);
  }
}
