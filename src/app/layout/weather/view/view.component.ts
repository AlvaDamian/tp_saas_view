import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view',
  templateUrl: 'view.html'
})
export class ViewComponent {

  lat: number;
  lon: number;

  result: any;

  constructor(private http: HttpClient) { }

  public submit($event) {

    $event.preventDefault();

    this
    .http
    .get('http://tp_saas-alvadamian957395.codeanyapp.com:3000/weather/now?lat=' + this.lat + '&lon=' + this.lon)
    .subscribe(data => {
      this.result = data;
    });
  }
}
