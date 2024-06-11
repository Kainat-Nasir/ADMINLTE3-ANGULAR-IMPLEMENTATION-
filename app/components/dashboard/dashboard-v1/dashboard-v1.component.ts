import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.css']
})
export class DashboardV1Component implements OnInit {
 
  public linechart :any;
  doughnut: any;
  currentChart: string = 'area';
  isCollapsed = false;
  isRemoved = false;



  ngOnInit(): void {
    this.lineChart();
    this.DoughnutChart();

  }
 lineChart(){  
  
    this.linechart = new Chart("bar", {
      type: 'line', //this denotes tha type of chart
      
      
      data: {// values on X-Axis
        labels: ['January', 'Febuary', 'March', 'April','May' ], 
	       datasets: [
          {
            label: "Orders",
            data: ['467','576', '572', '79', '92','574', '573', '576'],
            backgroundColor: 'green'
          },
          {
            label: "Rates",
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'red'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


  DoughnutChart(){  
  
    this.doughnut = new Chart("bar1", {
      type: 'doughnut', //this denotes tha type of chart
      
      
      data: {// values on X-Axis
        labels: ['January', 'Febuary', 'March', 'April','May' ], 
	       datasets: [
          {
            label: "Orders",
            data: ['467','576', '572', '79', '92','574', '573', '576'],
            backgroundColor: 'green'
          },
          {
            label: "Rates",
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'red'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  showChart(chartType: string) {
    this.currentChart = chartType;
  }
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  removeCard() {
    this.isRemoved = !this.isRemoved; 
  }
}
