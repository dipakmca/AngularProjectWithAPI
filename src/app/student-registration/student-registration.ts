import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-student-registration',
  imports: [RouterLink, FormsModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css',
})
export class StudentRegistration {
  student = {
    studentName: '',
    email: '',
    password: '',
    mobile: ''
  };
  constructor(private studentService: StudentService) { }

  saveStudent() {

    console.log('1. Register clicked');
    console.log('2. Data:', this.student);

    this.studentService.saveStudent(this.student)
      .subscribe({
        next: (response) => {
          console.log('3. API Success:', response);
          alert('Student registered successfully');
        },

        error: (error) => {
          console.error('3. API Error:', error);
          alert('API call failed');
        }
      });
  }
}
