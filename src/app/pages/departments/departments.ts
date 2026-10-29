import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Department {
  id: number;
  name: string;
  manager: string;
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css'
})
export class Departments {

  departments: Department[] = [
    { id: 1, name: 'Information Technology', manager: 'Rahul Sharma' },
    { id: 2, name: 'Human Resources', manager: 'Priya Patel' },
    { id: 3, name: 'Finance', manager: 'Amit Kumar' },
    { id: 4, name: 'Marketing', manager: 'Neha Verma' },
    { id: 5, name: 'Sales', manager: 'Rohit Singh' },
    { id: 6, name: 'Operations', manager: 'Pooja Gupta' },
    { id: 7, name: 'Customer Support', manager: 'Arjun Mehta' }
  ];

  newDepartment: Department = {
    id: 0,
    name: '',
    manager: ''
  };

  // Search
  searchTerm: string = '';

  // Editing state
  editingId: number | null = null;
  editBuffer: Department = { id: 0, name: '', manager: '' };

  // Delete confirmation
  deleteCandidateId: number | null = null;

  // Feedback message (toast-style)
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  // Sorting
  sortKey: keyof Department = 'id';
  sortAsc: boolean = true;

  // ---------- Computed ----------

  get filteredDepartments(): Department[] {
    let list = [...this.departments];

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(term) ||
        d.manager.toLowerCase().includes(term) ||
        d.id.toString().includes(term)
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

  get totalDepartments(): number {
    return this.departments.length;
  }

  get uniqueManagers(): number {
    return new Set(this.departments.map(d => d.manager.trim().toLowerCase())).size;
  }

  // ---------- Helpers ----------

  getInitials(name: string): string {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    return parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].substring(0, 2).toUpperCase();
  }

  private nextId(): number {
    return this.departments.length
      ? Math.max(...this.departments.map(d => d.id)) + 1
      : 1;
  }

  private showMessage(text: string, type: 'success' | 'error' = 'success') {
    this.message = text;
    this.messageType = type;
    setTimeout(() => (this.message = ''), 2500);
  }

  sortBy(key: keyof Department) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  }

  // ---------- CRUD ----------

  addDepartment() {
    const name = this.newDepartment.name.trim();
    const manager = this.newDepartment.manager.trim();

    if (!name || !manager) {
      this.showMessage('Please fill in both department name and manager.', 'error');
      return;
    }

    const duplicate = this.departments.some(
      d => d.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      this.showMessage('A department with this name already exists.', 'error');
      return;
    }

    this.departments.push({
      id: this.nextId(),
      name,
      manager
    });

    this.newDepartment = { id: 0, name: '', manager: '' };
    this.showMessage('Department added successfully.');
  }

  startEdit(dept: Department) {
    this.editingId = dept.id;
    this.editBuffer = { ...dept };
  }

  cancelEdit() {
    this.editingId = null;
  }

  saveEdit() {
    const name = this.editBuffer.name.trim();
    const manager = this.editBuffer.manager.trim();

    if (!name || !manager) {
      this.showMessage('Department name and manager cannot be empty.', 'error');
      return;
    }

    const index = this.departments.findIndex(d => d.id === this.editingId);
    if (index !== -1) {
      this.departments[index] = { ...this.departments[index], name, manager };
      this.showMessage('Department updated successfully.');
    }

    this.editingId = null;
  }

  confirmDelete(id: number) {
    this.deleteCandidateId = id;
  }

  cancelDelete() {
    this.deleteCandidateId = null;
  }

  deleteDepartment(id: number) {
    this.departments = this.departments.filter(d => d.id !== id);
    this.deleteCandidateId = null;
    this.showMessage('Department deleted.');
  }
}