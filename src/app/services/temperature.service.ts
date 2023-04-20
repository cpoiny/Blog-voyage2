import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface LocationResponse {
  // {
    // queryCost: number;
    // latitude: float;
    // longitude: float;
    // resolvedAddress: string;
    address: string;
    // timezone: string;
    // tzoffset: number;
    // description: string;
    // days: [
    //  {
    //   datetime: string;
    //   datetimeEpoch: number;
    //   tempmax: float;
    //   tempmin: float;
    //   temp: float;
    //   // feelslikemax: float;
    //   // feelslikemin: float;
    //   // feelslike: float;
    //   // dew: float;
    //   // humidity: float;
    //   // precip: float;
    //   // precipprob: float;
    //   // precipcover: float;
    //   // preciptype: [
    //   // rain
    //   // ],
    //   // "snow": 0,
    //   // "snowdepth": 0,
    //   // "windgust": 25.2,
    //   // "windspeed": 11.2,
    //   // "winddir": 253.7,
    //   // "pressure": 1013.6,
    //   // "cloudcover": 60.4,
    //   // "visibility": 16.3,
    //   // "solarradiation": 289.8,
    //   // "solarenergy": 25.2,
    //   // "uvindex": 9,
    //   // "severerisk": 10,
    //   // "sunrise": "05:54:13",
    //   // "sunriseEpoch": 1681962853,
    //   // "sunset": "19:25:56",
    //   // "sunsetEpoch": 1682011556,
    //   // "moonphase": 0,
    //   // "conditions": "Rain, Partially cloudy",
    //   // "description": "Partly cloudy throughout the day with rain.",
    //   // "icon": "rain",
    //   // "stations": [
    //   //  "LWOH",
    //   //  "LATI"
    //   // ],
    //   // "source": "comb",
    //   hours: [
    //    {
    //     datetime: string;
    //     datetimeEpoch: number;
    //     temp: float;
    // //     "feelslike": 17.3,
    // //     "humidity": 61.78,
    // //     "dew": 9.9,
    // //     "precip": 0,
    // //     "precipprob": 100,
    // //     "snow": 0,
    // //     "snowdepth": 0,
    // //     "preciptype": [
    // //      "rain"
    // //     ],
    // //     "windgust": 18.7,
    // //     "windspeed": 9.4,
    // //     "winddir": 290.8,
    // //     "pressure": 1014,
    // //     "visibility": 24.1,
    // //     "cloudcover": 71.4,
    // //     "solarradiation": 865,
    // //     "solarenergy": 3.1,
    // //     "uvindex": 9,
    // //     "severerisk": 10,
    // //     "conditions": "Rain, Partially cloudy",
    // //     "icon": "rain",
    // //     "stations": null,
    // //     "source": "fcst"
    // //    },
    // //    {
    // //     "datetime": "13:00:00",
    // //     "datetimeEpoch": 1681988400,
    // //     "temp": 17.8,
    // //     "feelslike": 17.8,
    // //     "humidity": 62.31,
    // //     "dew": 10.5,
    // //     "precip": 0,
    // //     "precipprob": 100,
    // //     "snow": 0,
    // //     "snowdepth": 0,
    // //     "preciptype": [
    // //      "rain"
    // //     ],
    // //     "windgust": 18.7,
    // //     "windspeed": 8.3,
    // //     "winddir": 299.3,
    // //     "pressure": 1013,
    // //     "visibility": 18.7,
    // //     "cloudcover": 86.5,
    // //     "solarradiation": 902,
    // //     "solarenergy": 3.2,
    // //     "uvindex": 9,
    // //     "severerisk": 10,
    // //     "conditions": "Rain, Partially cloudy",
    // //     "icon": "rain",
    // //     "stations": null,
    // //     "source": "fcst"
    //    }
    //   ]
    // }
    // ],
    // "alerts": [],
    // "stations": {
    //  "LATI": {
    //   "distance": 13983,
    //   "latitude": 41.42,
    //   "longitude": 19.72,
    //   "useCount": 0,
    //   "id": "LATI",
    //   "name": "LATI",
    //   "quality": 50,
    //   "contribution": 0
    //  },
    //  "LWOH": {
    //   "distance": 79003,
    //   "latitude": 41.18,
    //   "longitude": 20.75,
    //   "useCount": 0,
    //   "id": "LWOH",
    //   "name": "LWOH",
    //   "quality": 26,
    //   "contribution": 0
    //  }
 //    },
  currentConditions: {
     datetime: string;
     datetimeEpoch: number;
     temp: number;
    //  "feelslike": 18.7,
    //  "humidity": 60.1,
    //  "dew": 10.8,
    //  "precip": 0,
    //  "precipprob": 0,
    //  "snow": 0,
    //  "snowdepth": 0,
    //  "preciptype": null,
    //  "windgust": null,
    //  "windspeed": 7.6,
    //  "winddir": 180,
    //  "pressure": 1014,
    //  "visibility": 10,
    //  "cloudcover": 50,
    //  "solarradiation": 770,
    //  "solarenergy": 2.8,
    //  "uvindex": 8,
    //  "conditions": "Partially cloudy",
    //  "icon": "partly-cloudy-day",
    //  "stations": [
    //   "LWOH",
    //   "LATI"
    //  ],
    //  "source": "obs",
    //  "sunrise": "05:54:13",
    //  "sunriseEpoch": 1681962853,
    //  "sunset": "19:25:56",
    //  "sunsetEpoch": 1682011556,
    //  "moonphase": 0
    }
   }
 // }




@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  apiUrl = environment.temperatureApi.url;
  apiToken = environment.temperatureApi.key;
  city!: string;


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











