import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  registerStudent: FormGroup;
  studentService = inject(StudentsService);

// inicializarlo dentro del metodo constructor:
  constructor(){
    this.registerStudent = new FormGroup({
      nombre: new FormControl(null, []),
      edad: new FormControl(null, []),
      email: new FormControl(null, []),
      curso: new FormControl(null, []),
  }, [])
  }

  getDataForm(): void {
    // Llamo al servicio a la funcion insert:
    let msg: string = this.studentService.insert(this.registerStudent.value)
    alert(msg);
  }
}
