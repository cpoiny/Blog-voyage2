import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-autres-images',
  templateUrl: './autres-images.component.html',
  styleUrls: ['./autres-images.component.css']
})
export class AutresImagesComponent {
  voyages : IVoyage[] = VOYAGES;
  voyageDetail! : IVoyage;
  
  
  ngOnInit(){
    this.getVoyagebyId();
  }
  constructor(
    public activatedRoute: ActivatedRoute,
  ) {}
  
    getVoyagebyId() {
  
      // je recupère l'id de mon url et je le transforme en number
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log("je veux mon id", id);
  
      // je recherche dans ma liste de mock l'objet qui a l'id en question
      const voyageArticle = this.voyages.find((voyage: IVoyage) => voyage.id === id);
      console.log("voyageArticle", voyageArticle);
  
      // Si j'ai un voyage dans ma liste, j'assigne l'objet à ma variable voyageDetail
      if (voyageArticle) {
        this.voyageDetail! = voyageArticle;
        console.log("voyageDetaille à afficher", this.voyageDetail!);
      }
  
    }

}
