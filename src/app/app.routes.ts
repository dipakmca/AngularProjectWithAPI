import { Routes } from '@angular/router';
import { Students } from './students/students';
import { StudentRegistration } from './student-registration/student-registration';


export const routes: Routes = [{
  path: '',
  component: Students
},
{
  path: 'studentRegistration',
  component: StudentRegistration
}

];
