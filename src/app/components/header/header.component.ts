import { Component } from '@angular/core';
import { LocationResponse, TemperatureService } from 'src/app/services/temperature.service';
import { IVoyage, VOYAGES } from 'src/app/voyage.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cityInfo?: LocationResponse;

  constructor(private temperatureService: TemperatureService) { };

  ngOnInit() {
    this.temperatureService.getLocation().subscribe((next) => this.cityInfo = next);
  }
}
