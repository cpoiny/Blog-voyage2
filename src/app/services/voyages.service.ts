import { Injectable } from '@angular/core';
import { IVoyage, VOYAGES } from '../voyage.mock';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {

  // je recupère mon mock avec tous les voyages
voyages : IVoyage[] = VOYAGES;


// j'importe les constructeurs
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
  ) { }


  //je selectionne un voyage selon son id
  getVoyagebyId() : void | IVoyage {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log("id selected", id);
    const voyageSelectionne = this.voyages.find((voyage: IVoyage) => voyage.id === id); 
    console.log("voyage selectionné", voyageSelectionne);
    return voyageSelectionne;
  }



}
