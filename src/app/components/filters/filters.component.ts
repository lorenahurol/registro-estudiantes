import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icourse } from '../../interfaces/icourse.interface';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  cursos: Icourse[] = [];
  studentServices = inject(StudentsService)
  @Output() cursoSeleccionado: EventEmitter<string> = new EventEmitter()

  // Cuando cargue el componente, le pido al servicio los datos de los cursos
  ngOnInit() {
    this.cursos = this.studentServices.getAllCourses()
  }

  getDataFilter(form: any): void {
    // El valor del curso se lo tengo que enviar a studentList para que filtre su array de alumnos en funcion de ese curso -> Crear un output
    this.cursoSeleccionado.emit(form.value.curso)
  }

}
