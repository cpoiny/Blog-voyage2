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
  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }


  //je selectionne un voyage selon son id
  // getVoyagebyId() {
  //   const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  //   console.log("je veux mon id", id);
  //   const voyageSelectionne = this.voyages.find((voyage: IVoyage) => voyage.id === id);
  //   if (voyageSelectionne) {
  //     this.voyageSelected = voyageSelectionne;
  //     console.log("je veux mon voyage", this.voyageSelected);
  //   }

  // }


  //je recupére le dernier voyage
  getMainVoyage() {
    const lastConsulte = this.voyages.filter((voyage: IVoyage) => voyage.isActive === true);

  }


}
