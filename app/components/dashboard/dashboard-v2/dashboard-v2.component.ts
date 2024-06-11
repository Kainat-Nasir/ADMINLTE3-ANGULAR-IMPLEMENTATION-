import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard-v2',
  templateUrl: './dashboard-v2.component.html',
  styleUrls: ['./dashboard-v2.component.css'],

  
})
export class DashboardV2Component {
  public chart: any;
  public line :any;


  ngOnInit(): void {
    this.createChart();
  }
  createChart(){  
  
    this.chart = new Chart("bar", {
      type: 'bar', //this denotes tha type of chart
      
      
      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92','574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  isHidden: boolean = false;

  toggleVisibility(): void {
    this.isHidden = !this.isHidden;
  }
    }
  // showChart = true;

  // minimizeChart(): void {
  //   this.showChart =!this.showChart;
  // } 


