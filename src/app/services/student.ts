import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/api/regStudent';

  constructor(private http: HttpClient) { }

  saveStudent(student: any) {
    console.log('Calling API:', this.apiUrl);
    return this.http.post(this.apiUrl, student);
  }
}
