import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVoyage, VOYAGES } from '../voyage.mock';

export interface LocationResponse {
  // {
    
    address: string;
 
  currentConditions: {
     datetime: string;
     datetimeEpoch: number;
     temp: number;
    }
   }
 // }




@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  apiUrl = environment.temperatureApi.url;
  apiToken = environment.temperatureApi.key;
  


  voyages : IVoyage[]= VOYAGES;
  

  constructor(
    private httpClient : HttpClient,
  ) { }

  


  getLocation(): Observable<LocationResponse> {
    // url de sortie de l'api est la suivante : 
    //https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tirana?unitGroup=metric&key=ZFLNZWS2NFJXKPR9BVEPMJ5PZ&contentType=json
    // on la reconstitue avec la variable url ci dessous:
    const url = `${this.apiUrl}Tirana?unitGroup=metric&key=${this.apiToken}&contentType=json`;
    console.log("url Location:", url);
    return this.httpClient.get<LocationResponse>(url);
  }

  
}











