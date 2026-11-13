
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './student-registration.html',
  styleUrl: './student-registration.css'
})
export class StudentRegistration {

  student = {
    studentName: '',
    email: '',
    password: '',
    mobile: ''
  };

  isSubmitting = false;

  constructor(private studentService: StudentService) {}

  saveStudent() {

    console.log('1. Register clicked');
    console.log('2. Student Data:', this.student);

    // Prevent duplicate API calls
    if (this.isSubmitting) {
      return;
    }

    // Validate fields
    if (
      !this.student.studentName.trim() ||
      !this.student.email.trim() ||
      !this.student.password ||
      !this.student.mobile.trim()
    ) {
      alert('Please fill all fields');
      return;
    }

    this.isSubmitting = true;

    // Call PHP middleware API
    this.studentService.saveStudent(this.student)
      .subscribe({

        next: (response) => {

          console.log('3. API Success:', response);

          if (response.status === true) {
            alert('Student registered successfully');

            // Clear form
            this.student = {
              studentName: '',
              email: '',
              password: '',
              mobile: ''
            };

          } else {
            alert(response.message || 'Registration failed');
          }

          this.isSubmitting = false;
        },

        error: (error) => {

          console.error('3. API Error:', error);

          console.log('HTTP Status:', error.status);
          console.log('Error Message:', error.message);
          console.log('PHP Response:', error.error);

          alert(
            error.error?.message ||
            'API call failed. Check console for details.'
          );

          this.isSubmitting = false;
        }

      });
  }
}
