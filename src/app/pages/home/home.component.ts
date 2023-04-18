import { Component } from '@angular/core';
import { VoyagesService } from 'src/app/services/voyages.service';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
voyages : IVoyage[]= VOYAGES;

voyageSelected = this.voyages.filter((voyage :IVoyage) => voyage.isActive === true);

constructor(
  public voyageService : VoyagesService,
) {}

ngOnInit() {
  console.log("mes voyages", this.voyages);
  this.getVoyagebyId();
  this.voyages;
}


// function pour récupérer un voyage selon son id
getVoyagebyId() {
  const voyageSelect = this.voyageService.getVoyagebyId();
 console.log("voyage selectionne", voyageSelect);
  
}




}
