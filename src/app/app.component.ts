import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  firstName = '';
  lastName = '';
  mobileNumber = '';
  value = '';
  address = '';
  country = '';
  emailId = '';
  time = '';
  values = ['Male', 'Female'];
  countries = ['India', 'USA'];
  times = ['1', '1 1/2', '2', '2 1/2'];
  add() {
    if (this.firstName === '') {
      alert('Please Enter First Name');
      return;
    }
    if (this.lastName === '') {
      alert('Please Enter Last Name');
      return;
    }
    if (this.mobileNumber === '') {
      alert('Please Enter Mobile number');
      return;
    }
    if (this.emailId === '') {
      alert('Please Enter Email Id');
      return;
    }
    if (this.value === '') {
      alert('Please choose the gender');
      return;
    }
    if (this.address === '') {
      alert('Please Enter Address');
      return;
    }
    if (this.country === '') {
      alert('Please choose country');
      return;
    }
    if (this.time === '') {
      alert('Please choose time');
      return;
    }
    console.log('FirstName:' + this.firstName);
    console.log('LastName:' + this.lastName);
    console.log('Mobile Number:' + this.mobileNumber);
    console.log('Mobile Number:' + this.emailId);
    console.log('Gender:' + this.value);
    console.log('Address:' + this.address);
    console.log('Country:' + this.country);
    console.log('List Time:' + this.time);
  }
  delete() {
    this.firstName = '';
    this.lastName = '';
    this.mobileNumber = '';
    this.value = '';
    this.emailId = '';
    this.address = '';
    this.country = '';
    this.time = '';
    console.log('FirstName:' + this.firstName);
    console.log('LastName:' + this.lastName);
    console.log('Mobile Number:' + this.mobileNumber);
    console.log('Mobile Number:' + this.emailId);
    console.log('Gender:' + this.value);
    console.log('Address:' + this.address);
    console.log('Country:' + this.country);
    console.log('List Time:' + this.time);
  }
}
