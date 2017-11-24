import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Column, Ng2STFactory } from 'ng2-simple-table';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.html'
})
export class ViewAllComponent implements OnInit {

  models: any;

  columns: Array<Column> = [
    {id: 1, title: 'lon', target: 'coord.lon'},
    {id: 2, title: 'lat', target: 'corrd.lat'},
    {id: 3, title: 'Country', target: 'country'},
    {id: 4, title: 'Sunrise', target: 'sunrise'},
    {id: 5, title: 'Sunset', target: 'sunset'},
    {id: 6, title: 'Weather', target: 'weather'},
    {id: 7, title: 'Temp', target: 'temp'},
    {id: 8, title: 'Humidity', target: 'humidity'},
    {id: 9, title: 'Temp', target: 'Temp'},
    {id: 10, title: 'Pressure', target: 'pressure'},
    {id: 11, title: 'City', target: 'city'},
    {id: 12, title: 'Cod', target: 'cod'}
  ];

  settings: any;

  constructor(private http: HttpClient) {


    this.settings = Ng2STFactory
                    .createREST(
                      'http://tp_saas-alvadamian957395.codeanyapp.com:3000/weather/all',
                      this.columns
                    );
  }

  ngOnInit(): void {

    /*
    this
    .http
    .get('http://tp_saas-alvadamian957395.codeanyapp.com:3000/weather/all')
    .subscribe(data => {
      this.models = data;
    });
    */
  }
}
