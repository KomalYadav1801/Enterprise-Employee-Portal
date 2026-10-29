import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SalaryRecord {
  id: number;
  employee: string;
  basic: number;
  bonus: number;
}

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './salary.html',
  styleUrl: './salary.css'
})
export class Salary {

  salaries: SalaryRecord[] = [
    {
      id:101,
      employee:'Rahul Sharma',
      basic:50000,
      bonus:5000
    },
    {
      id:102,
      employee:'Priya Patel',
      basic:55000,
      bonus:6000
    },
    {
      id:103,
      employee:'Amit Kumar',
      basic:60000,
      bonus:7000
    },
    {
      id:104,
      employee:'Neha Verma',
      basic:48000,
      bonus:4500
    },
    {
      id:105,
      employee:'Rohit Singh',
      basic:65000,
      bonus:8000
    },
    {
      id:106,
      employee:'Pooja Gupta',
      basic:52000,
      bonus:5500
    },
    {
      id:107,
      employee:'Arjun Mehta',
      basic:58000,
      bonus:6500
    },
    {
      id:108,
      employee:'Anjali Mishra',
      basic:62000,
      bonus:7500
    }
  ];

  newSalary: SalaryRecord = {
    id:0,
    employee:'',
    basic:0,
    bonus:0
  };

  addSalary() {
    this.salaries.push({ ...this.newSalary });

    this.newSalary = {
      id:0,
      employee:'',
      basic:0,
      bonus:0
    };
  }

  deleteSalary(index:number) {
    this.salaries.splice(index,1);
  }

  totalSalary(item:SalaryRecord) {
    return item.basic + item.bonus;
  }

  // ==========================
  // NEW METHODS
  // ==========================

  getTotalPayroll(): number {
    return this.salaries.reduce(
      (sum, item) => sum + item.basic + item.bonus,
      0
    );
  }

  getAverageSalary(): number {
    if (this.salaries.length === 0) {
      return 0;
    }

    return Math.round(
      this.getTotalPayroll() / this.salaries.length
    );
  }

  getTotalBonus(): number {
    return this.salaries.reduce(
      (sum, item) => sum + item.bonus,
      0
    );
  }

}