import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent.interface'
import { ALUMNOS } from '../db/students.db'; // Importar la base de datos al servicio
import { Icourse } from '../interfaces/icourse.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // Crear una propiedad privada, para que desde ningun sitio se pueda acceder a la interfaz de alumnos. Que sea el servicio el que se encargue de repartir:
  private arrAlumnos: IStudent[] = ALUMNOS // Acceso al array privado al que solo tiene acceso esta clase. 
  private arrCursos: Icourse[] = [
    {
    title: '1 ESO', value: '1eso'
    },
    {
    title: '2 ESO', value: '2eso'
    },
    {
    title: '3 ESO', value: '3eso'
    },
    {
    title: '4 ESO', value: '4eso'
    },
    {
    title: '5 ESO', value: '5eso'
    },
    {
    title: '6 ESO', value: '6eso'
    },
    {
    title: '7 ESO', value: '7eso'
    },
    {
    title: '8 ESO', value: '8eso'
    },
  ]
  private id: number = 4 // Valor 4 porque voy a hacer un formulario que va a inyectar valores en el campo. Para que cuando meta un nuevo alumno tenga un valor unico. En mi base de datos ahora tengo 3 alumnos, pues el siguiente sera 4.

  // Getter de cursos:
  getAllCourses(): Icourse[] {
    return this.arrCursos
  }
  
  // Obtener todos los alumnos: Te doy este metodo para que puedas consultar el array de datos.
  getAll(): IStudent[] {
    return this.arrAlumnos
  }

  // Getter que te devuelve los alumnos por id:
  // Undefined para que no nos de error
  getById(id: number): IStudent | undefined {
    return this.arrAlumnos.find( student => student.id === id)
  }

  // Insertar la data del alumno en el array:
  insert(alumno: IStudent): string {
    alumno.id = this.id
    let longitud = this.arrAlumnos.push(alumno) // Equiv a peticion a BBDD = ok o ko.
    this.id++; // El proximo id que entra es consecutivo.
    if (longitud) { // Si longitud OK:
      return 'El alumno ha sido insertado correctamente'
    } else {
      return 'No ha sido posible insertar el alumno'
    }
  }

  filterByCourse(course: string): IStudent[] {
    return this.arrAlumnos.filter(alumno => alumno.curso.includes(course)) // Coge el alumno que incluya el curso. Si la cadena de acaracteres esta vacia, aparecen todos los alumnos.
  }
}
