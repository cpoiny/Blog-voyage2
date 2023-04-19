import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {

@Input() positif! : string[];
@Input() negatif! : string[];
@Input() conseil! : string[];

}


