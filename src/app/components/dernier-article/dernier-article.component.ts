import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-dernier-article',
  templateUrl: './dernier-article.component.html',
  styleUrls: ['./dernier-article.component.css']
})
export class DernierArticleComponent {

// tous mes voyages
voyages : IVoyage[]= VOYAGES;

//voyage de la page d'accueil
voyageSelected = this.voyages.filter((voyage :IVoyage) => voyage.isActive === true);



}




