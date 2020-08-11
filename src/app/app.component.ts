import { Component } from "@angular/core";
import { country } from "./country";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular7 Template-driven Form";

  countryList: country[] = [
    new country("1", "India"),
    new country("2", "USA"),
    new country("3", "England")
  ];

  onSubmit(contactForm) {
    console.log(contactForm.value);
  }
}