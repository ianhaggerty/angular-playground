import { EnquiryComponent } from './enquiry/enquiry.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

export const enquiryRoutes = [
  {
    path: 'enquiry',
    component: EnquiryComponent,
    children: [
      {
        path: 'form',
        component: EnquiryFormComponent
      }
    ]
  }
];
