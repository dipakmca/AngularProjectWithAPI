
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost/smartAPI/api/apiToCall.php';

  saveStudent(student: any): Observable<any> {

    console.log('Calling API:', this.apiUrl);
    console.log('Student Data:', student);

    return this.http.post<any>(
      this.apiUrl,
      student
    );
  }
}
