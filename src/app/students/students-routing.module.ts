import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'students',
        component: StudentListComponent
      },
      {
        path: 'student/:id',
        component: StudentDetailComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {
}
