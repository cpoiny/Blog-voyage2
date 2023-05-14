import { Component, Input } from '@angular/core';
import { IGalerie} from 'src/app/voyage.mock';

@Component({
  selector: 'app-autres-images',
  templateUrl: './autres-images.component.html',
  styleUrls: ['./autres-images.component.css']
})
export class AutresImagesComponent {

  @Input() galerie!: IGalerie[];  

}
