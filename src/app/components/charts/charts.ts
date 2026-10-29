import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import {
  Chart,
  registerables
} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  standalone: true,
  templateUrl: './charts.html',
  styleUrls: ['./charts.css']
})
export class ChartsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('employeeChart')
  employeeChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('attendanceChart')
  attendanceChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('departmentChart')
  departmentChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('payrollChart')
  payrollChart!: ElementRef<HTMLCanvasElement>;

  employee!: Chart;
  attendance!: Chart;
  department!: Chart;
  payroll!: Chart;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    this.createEmployeeChart();
    this.createAttendanceChart();
    this.createDepartmentChart();
    this.createPayrollChart();

  }

  // ==========================
  // Employee Growth
  // ==========================

  createEmployeeChart() {

    this.employee = new Chart(
      this.employeeChart.nativeElement,
      {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label:'Employees',
            data:[120,150,180,210,250,280,310,350,390,430,470,520],
            borderColor:'#2563eb',
            backgroundColor:'rgba(37,99,235,.15)',
            fill:true,
            tension:.4
          }]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false
        }
      }
    );

  }

  // ==========================
  // Attendance
  // ==========================

  createAttendanceChart() {

    this.attendance = new Chart(
      this.attendanceChart.nativeElement,
      {
        type:'bar',
        data:{
          labels:['Mon','Tue','Wed','Thu','Fri','Sat'],
          datasets:[{
            label:'Present',
            data:[470,480,475,485,490,460],
            backgroundColor:'#10b981'
          }]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false
        }
      }
    );

  }

  // ==========================
  // Department
  // ==========================

  createDepartmentChart(){

    this.department = new Chart(
      this.departmentChart.nativeElement,
      {
        type:'doughnut',
        data:{
          labels:[
            'IT',
            'HR',
            'Sales',
            'Finance',
            'Marketing'
          ],
          datasets:[{
            data:[180,80,90,70,80],
            backgroundColor:[
              '#2563eb',
              '#10b981',
              '#f59e0b',
              '#ef4444',
              '#8b5cf6'
            ]
          }]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false
        }
      }
    );

  }

  // ==========================
  // Payroll
  // ==========================

  createPayrollChart(){

    this.payroll = new Chart(
      this.payrollChart.nativeElement,
      {
        type:'line',
        data:{
          labels:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul'
          ],
          datasets:[{
            label:'Payroll (₹ Lakhs)',
            data:[12,13,15,14,16,17,18],
            borderColor:'#f97316',
            backgroundColor:'rgba(249,115,22,.18)',
            fill:true,
            tension:.4
          }]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false
        }
      }
    );

  }

  ngOnDestroy(): void {

    this.employee?.destroy();
    this.attendance?.destroy();
    this.department?.destroy();
    this.payroll?.destroy();

  }

}