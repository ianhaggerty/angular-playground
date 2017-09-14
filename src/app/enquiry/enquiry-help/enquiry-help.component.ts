import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'apg-enquiry-help',
  templateUrl: './enquiry-help.component.html',
  styleUrls: ['./enquiry-help.component.scss']
})
export class EnquiryHelpComponent implements OnInit {

  message = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  send() {
    this.message = 'Sending message...';
    setTimeout(() => {
      this.closePopup();
    });
  }

  cancel() {

  }

  closePopup() {
    this.router.navigate([{outlets: {popup: null}}]);
  }

}
