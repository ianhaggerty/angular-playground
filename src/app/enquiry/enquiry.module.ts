import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { RouterModule } from '@angular/router';
import { enquiryRoutes } from './enquiry-routing';
import { EnquiryHelpComponent } from './enquiry-help/enquiry-help.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(enquiryRoutes),
    FormsModule
  ],
  declarations: [
    EnquiryComponent,
    EnquiryFormComponent,
    EnquiryHelpComponent
  ]
})
export class EnquiryModule {
}
