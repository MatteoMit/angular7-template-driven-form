import { Component, OnInit } from "@angular/core";
import { Contact} from './model/Contact';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  title = "Template-driven Form and validation in Angular";

  contact: Contact;

  ngOnInit() {
    this.contact = {
      firstname: "",
      lastname: "",
      gender: "male",
      isToc: true,
      email: ""
    };
  }

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
}

