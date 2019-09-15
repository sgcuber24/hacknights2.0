import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {

  constructor(jsonp : Jsonp) {
    jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=msft-c.json&callback=JSONP_CALLBACK').subscribe(res => {
        this.options = {

          rangeSelector: {
              selected: 4
          },

          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
               day: '%d-%m-%Y'    //ex- 01 Jan 2016
            }
          },
  
          yAxis: {
              labels: {
                  formatter: function () {
                      return (this.value > 0 ? '' : '') + this.value + '$';
                  }
              },
              plotLines: [{
                  value: 0,
                  width: 2,
                  color: 'silver'
              }]
          },
  
          plotOptions: {
              series: {
                  compare: 'percent',
                  showInNavigator: true
              }
          },
  
          tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
              valueDecimals: 2,
              split: true
          },
  
          series: [{
            name: 'MSFT',
            data: res.json()
          }]
      }
    });
}
  
  options:Object;



  ngOnInit() {
  }

}
