import { Apero } from "./../../../_interface/apero.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-apero-data",
  templateUrl: "./apero-data.component.html",
  styleUrls: ["./apero-data.component.css"],
})
export class AperoDataComponent implements OnInit {
  @Input() public apero: Apero;
  
  constructor() {}

  ngOnInit() {}
}
