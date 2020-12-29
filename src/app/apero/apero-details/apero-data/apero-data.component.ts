import { Apero, Themen } from "./../../../_interface/apero.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User } from "src/app/_interface/user.model";

@Component({
  selector: "app-apero-data",
  templateUrl: "./apero-data.component.html",
  styleUrls: ["./apero-data.component.css"],
})
export class AperoDataComponent implements OnInit {
  @Input() public apero: Apero;
  @Input() public users: User;
  @Input() public themen: Themen;
  /* public selectOptions = [{name:'Show', value: 'show'}, {name: `Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();*/

  constructor() {}

  ngOnInit() {}

  /*public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }*/
}
