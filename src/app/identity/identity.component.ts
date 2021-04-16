import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-identity",
  templateUrl: "./identity.component.html",
  styleUrls: ["./identity.component.css"]
})
export class IdentityComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
