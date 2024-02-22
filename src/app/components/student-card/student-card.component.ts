import { Component, Input } from '@angular/core';
import { IStudent } from '../../interfaces/istudent.interface';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  // Crear el input de miAlumno:
  @Input() miAlumno!: IStudent

}
