import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentService } from '../student.service';
import 'rxjs/add/operator/switchMap';
import { Student } from '../student';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'apg-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  animations: [
    slideInDownAnimation
  ]
})
export class StudentDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  student$: Observable<Student>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: StudentService) {
  }

  ngOnInit() {
    this.student$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.fetch(+params.get('id')));
  }

  goBack() {
    this.student$.map((s) => s.id).subscribe((id) => {
      this.router.navigate(['/students',
        {id: id, foo: 'hey'}]);
    });
  }

}
