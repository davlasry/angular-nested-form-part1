import { Component, Input, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-identity",
  templateUrl: "./identity.component.html",
  styleUrls: ["./identity.component.css"]
  // providers: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class IdentityComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor(private parent: FormGroupDirective) {}

  ngOnInit() {
    console.log(this.parent);

    this.parent.form.setControl(
      "firstName",
      new FormControl(null, [Validators.required])
    );
    this.parent.form.setControl(
      "lastName",
      new FormControl(null, [Validators.required])
    );
  }
}
