import { Component, OnInit } from '@angular/core';
import { InquiryForm } from '../../../../core/models';
import { MultiPurposeService } from '../../../../core/services/multi-purpose.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-inquire-now',
  templateUrl: './inquire-now.component.html',
  styleUrls: ['./inquire-now.component.css']
})
export class InquireNowComponent implements OnInit {
  model = new InquiryForm();
  package: any = 'Select Package';
  isSubmitted: boolean = false;
  isError: boolean = false;
  showSpinner: boolean = false;
  isValidDate: boolean = false;
  showInvalidDateMessage = false;

  constructor(private multiPurposeService: MultiPurposeService) { }

  ngOnInit(): void {
    this.model = new InquiryForm();
  }

  async submitForm(inquiryForm: NgForm) {

    const arrivalDate = this.model.arrivalDate;
    const departureDate = this.model.departureDate;

    this.isValidDate = this.compareDates(arrivalDate, departureDate);

    if (this.isValidDate) {
      this.showInvalidDateMessage = true;
      this.showSpinner = true;
      this.multiPurposeService.submitInquiryForm(this.model).subscribe(
        () => {
          this.showSpinner = false;
          this.isSubmitted = true;
          inquiryForm.resetForm();
          console.log(`Inquiry form successfully submitted for processing`);
        },
        error => {
          this.isError = true;
          console.log(`Error occurred submitting inquiry form with the following error: ${error}`);
        }
      );
    }
    else {
      this.showInvalidDateMessage = false;
    }
  }

  compareDates(startDate: any, endDate: any) {
    return (startDate <= endDate);
  }
}
