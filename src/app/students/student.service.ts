import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class StudentService {

  students = [
    new Student('Ian', 'awesome'),
    new Student('Jen', 'creative'),
    new Student('Sarah', 'social'),
    new Student('Gokul', 'rich')
  ];

  constructor() {
  }

  fetch(id: number): Observable<Student> {
    return Observable.create((observer) => {
      observer.next(this.students.filter((s) => s.id === id)[0]);
      observer.complete();
    });
  }

  fetchAll(): Observable<Student[]> {
    return Observable.create((observer) => {
      observer.next(this.students);
      observer.complete();
    });
  }

  add(name: string, desc: string): Observable<Student> {
    return Observable.create((observer) => {
      const newStudent = new Student(name, desc);
      observer.next(newStudent);
      observer.complete();
    });
  }

  remove(id: number): Observable<Student | undefined> {
    return Observable.create((observer) => {
      let student;
      this.students = this.students.filter((s) => {
        if (s.id === id) {
          student = s;
          return false;
        }
        return true;
      });
      observer.next(student);
      observer.complete();
    });
  }

}
