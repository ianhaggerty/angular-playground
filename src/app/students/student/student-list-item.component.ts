import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'apg-student',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {

  @Input() student: Student;

  constructor() {
  }

  ngOnInit() {
  }

}
