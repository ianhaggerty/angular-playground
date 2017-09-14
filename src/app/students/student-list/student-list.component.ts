import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'apg-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students$: Observable<Student[]>;
  public id$: Observable<number | undefined>;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.students$ = this.studentService.fetchAll();

    this.id$ =
      this.route.paramMap.map((params: ParamMap) => {
        return Number(params.get('id'));
      });

    this.id$.subscribe((id) => console.log(`id: ${id}`));
  }

}
