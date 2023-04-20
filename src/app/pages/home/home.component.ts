import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoyagesService } from 'src/app/services/voyages.service';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
voyages : IVoyage[]= VOYAGES;
voyageDetail? : IVoyage;
voyageSelected = this.voyages.filter((voyage :IVoyage) => voyage.isActive === true);

constructor(
  public voyageService : VoyagesService,
  public activatedRoute: ActivatedRoute,
) {}

ngOnInit() {
  //console.log("mes voyages", this.voyages);
}






}





