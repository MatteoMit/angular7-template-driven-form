 
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template driven forms';
 
  @ViewChild('contactForm', {static: false}) contactForm: NgForm;
 
  countryList: country[] = [
    new country("1", "Italy"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  contact: Contact;
 
  ngOnInit() {
 
    this.contact = {
      firstname: "Giorgio",
      lastname: "Aurispa",
      email: "giorgio.giorgi@auur.it",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Roma",
        street: "Via dell'Olmo, 9",
        pincode: "00100"
      }
    };
 
    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
 
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
  setDefaults() {
    this.contactForm.setValue(this.contact);
  }
 
  changeCountry() {
    this.contactForm.controls["country"].setValue("1");
  }
 
  patchValue() {
    let obj = {
      firstname: "Erminio",
      lastname: "Ottone",
      email: "erminio.ottone@gmail.com",
    };
 
    this.contactForm.control.patchValue(obj);
 
  }
 
  changeAddress() {
    let obj = {
      city: "Roma",
      street: "Via del Tufello, 25",
      pincode: "600100"
    };
    let address= this.contactForm.controls["address"] as FormGroup
    address.patchValue(obj);
 
  }
 
  reset() {
    this.contactForm.reset();
  }
 
  resetForm() {
    this.contactForm.resetForm();
  }
}
 
 
export class Contact {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  isMarried: boolean;
  country: string;
  address: {
    city: string;
    street: string;
    pincode: string;
  }
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
 
 