import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    static times = 0;
    private baseUrl: string = 'https://www.sojson.com/open/api/weather/json.shtml?city=北京';

    constructor(private jsonp: Jsonp) { }

    getJSON() {
        let callback = "&callback=" + "__ng_jsonp__.__req" + WeatherService.times + ".finished";
        WeatherService.times++;
        let url = this.baseUrl + callback;
        return this.jsonp.get(url).map(res => res.json());
    }
    
}