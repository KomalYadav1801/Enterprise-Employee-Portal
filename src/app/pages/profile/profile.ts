import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  profileForm!: FormGroup;

  completion = 0;

  

  editMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.profileForm = this.fb.group({

      fullName: [
        'Komal Yadav',
        Validators.required
      ],

      email: [
        'komal@gmail.com',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '9876543210',
        Validators.required
      ],

      dob: [
        '2008-01-18'
      ],

      gender: [
        'Female'
      ],

      address: [
        'Mumbai, Maharashtra'
      ],

      employeeId: [
        'EMP-9'
      ],

      department: [
        'IT'
      ],

      designation: [
        'Angular Developer'
      ],

      manager: [
        'Vishal Sharma'
      ],

      joiningDate: [
        '2024-01-15'
      ],

      employmentType: [
        'Full Time'
      ],

      emergencyName: [
        'Manoj Yadav'
      ],

      relation: [
        'Father'
      ],

      emergencyPhone: [
        '9876543211'
      ]

    });

    this.calculateProgress();

    this.profileForm.valueChanges.subscribe(() => {
      this.calculateProgress();
    });

  }

  calculateProgress() {

    const values = this.profileForm.value;

    let total = Object.keys(values).length;

    let filled = 0;

    Object.values(values).forEach(value => {

      if (
        value !== null &&
        value !== undefined &&
        value.toString().trim() !== ''
      ) {
        filled++;
      }

    });

    this.completion = Math.round((filled / total) * 100);

  }

  saveProfile() {

    if (this.profileForm.invalid) {

      this.profileForm.markAllAsTouched();

      alert('Please fill all required fields.');

      return;

    }

    console.log(this.profileForm.value);

    alert('✅ Profile Updated Successfully');

  }

  resetForm() {

    this.profileForm.reset();

    this.calculateProgress();

  }

  editProfile() {

    this.editMode = !this.editMode;

  }

  
}