import { Component } from '@angular/core';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-dernier-article',
  templateUrl: './dernier-article.component.html',
  styleUrls: ['./dernier-article.component.css']
})
export class DernierArticleComponent {

  voyages : IVoyage[]= VOYAGES;

voyageSelected = this.voyages.filter((voyage :IVoyage) => voyage.isActive === true);

}
