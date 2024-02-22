import { Component, inject } from '@angular/core'; // Importar metodo inject
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../interfaces/istudent.interface';
import { StudentCardComponent } from '../student-card/student-card.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [StudentCardComponent, FiltersComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
  // Opcion 1: Inyectar el servicio dentro de un componente: 
  // constructor(private studentServices: StudentsService) {}

  // Opcion 2: Inyectar el servicio dentro de un componente: No se importa, se inyecta en aquellos componentes que se utiliza.
  studentServices = inject(StudentsService);

  //Crear array de alumnos para ir luego al HTML y poder aplicar el @for:
  alumnos: IStudent[] = [];

  // Cuando cargue el componente, quiero obtener un array de datos con los datos de los students.
  ngOnInit() {
    this.alumnos = this.studentServices.getAll() // Se puede hacer un get con las edades de los alumnos, curso...
    //console.log(this.alumnos)
  }

   getCourse($event: string): void {
    this.alumnos = this.studentServices.filterByCourse($event)

}
}

