import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListItemComponent } from './student/student-list-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import { StudentRoutingModule } from './students-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentListItemComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentsModule {
}

