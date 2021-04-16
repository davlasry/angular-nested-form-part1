import { Component, VERSION } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    age: [null, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log(this.form.value);
    console.log(this.form.errors);
    console.log("form.valid", this.form.valid);
  }
}
