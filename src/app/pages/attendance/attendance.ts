import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AttendanceRecord {
  id: number;
  employee: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class Attendance {

  records: AttendanceRecord[] = [
    { id: 1, employee: 'Rahul Sharma', date: '2026-06-27', status: 'Present' },
    { id: 2, employee: 'Priya Patel', date: '2026-06-27', status: 'Absent' },
    { id: 3, employee: 'Amit Kumar', date: '2026-06-27', status: 'Present' },
    { id: 4, employee: 'Neha Verma', date: '2026-06-27', status: 'Leave' },
    { id: 5, employee: 'Rohit Singh', date: '2026-06-27', status: 'Present' },
    { id: 6, employee: 'Pooja Gupta', date: '2026-06-27', status: 'Present' },
    { id: 7, employee: 'Arjun Mehta', date: '2026-06-27', status: 'Absent' },
    { id: 8, employee: 'Anjali Mishra', date: '2026-06-27', status: 'Present' }
  ];

  newRecord: AttendanceRecord = {
    id: 0,
    employee: '',
    date: this.today(),
    status: 'Present'
  };

  // Search & filter
  searchTerm: string = '';
  statusFilter: string = 'All';

  // Editing
  editingId: number | null = null;
  editBuffer: AttendanceRecord = { id: 0, employee: '', date: '', status: 'Present' };

  // Delete confirmation
  deleteCandidateId: number | null = null;

  // Toast
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  // Sorting
  sortKey: keyof AttendanceRecord = 'id';
  sortAsc: boolean = true;

  // ---------- Computed ----------

  get filteredRecords(): AttendanceRecord[] {
    let list = [...this.records];

    if (this.statusFilter !== 'All') {
      list = list.filter(r => r.status === this.statusFilter);
    }

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      list = list.filter(r =>
        r.employee.toLowerCase().includes(term) ||
        r.date.includes(term) ||
        r.id.toString().includes(term)
      );
    }

    list.sort((a, b) => {
      const valA = a[this.sortKey];
      const valB = b[this.sortKey];
      if (valA < valB) return this.sortAsc ? -1 : 1;
      if (valA > valB) return this.sortAsc ? 1 : -1;
      return 0;
    });

    return list;
  }

  get totalRecords(): number {
    return this.records.length;
  }

  get presentCount(): number {
    return this.records.filter(r => r.status === 'Present').length;
  }

  get absentCount(): number {
    return this.records.filter(r => r.status === 'Absent').length;
  }

  get leaveCount(): number {
    return this.records.filter(r => r.status === 'Leave').length;
  }

  get attendanceRate(): string {
    if (this.records.length === 0) return '0%';
    return Math.round((this.presentCount / this.records.length) * 100) + '%';
  }

  // ---------- Helpers ----------

  today(): string {
    return new Date().toISOString().split('T')[0];
  }

  private nextId(): number {
    return this.records.length
      ? Math.max(...this.records.map(r => r.id)) + 1
      : 1;
  }

  private showMessage(text: string, type: 'success' | 'error' = 'success') {
    this.message = text;
    this.messageType = type;
    setTimeout(() => (this.message = ''), 2500);
  }

  sortBy(key: keyof AttendanceRecord) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  }

  // ---------- CRUD ----------

  addRecord() {
    const employee = this.newRecord.employee.trim();
    const date = this.newRecord.date;

    if (!employee || !date) {
      this.showMessage('Please enter employee name and date.', 'error');
      return;
    }

    const duplicate = this.records.some(
      r => r.employee.toLowerCase() === employee.toLowerCase() && r.date === date
    );

    if (duplicate) {
      this.showMessage('Attendance already marked for this employee on this date.', 'error');
      return;
    }

    this.records.push({
      id: this.nextId(),
      employee,
      date,
      status: this.newRecord.status
    });

    this.newRecord = {
      id: 0,
      employee: '',
      date: this.today(),
      status: 'Present'
    };

    this.showMessage('Attendance record added successfully.');
  }

  startEdit(record: AttendanceRecord) {
    this.editingId = record.id;
    this.editBuffer = { ...record };
  }

  cancelEdit() {
    this.editingId = null;
  }

  saveEdit() {
    const employee = this.editBuffer.employee.trim();

    if (!employee || !this.editBuffer.date) {
      this.showMessage('Employee name and date cannot be empty.', 'error');
      return;
    }

    const index = this.records.findIndex(r => r.id === this.editingId);
    if (index !== -1) {
      this.records[index] = { ...this.records[index], ...this.editBuffer, employee };
      this.showMessage('Record updated successfully.');
    }

    this.editingId = null;
  }

  confirmDelete(id: number) {
    this.deleteCandidateId = id;
  }

  cancelDelete() {
    this.deleteCandidateId = null;
  }

  deleteRecord(id: number) {
    this.records = this.records.filter(r => r.id !== id);
    this.deleteCandidateId = null;
    this.showMessage('Record deleted.');
  }
}