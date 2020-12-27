import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "./../../shared/repository.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { UserForCreation } from "../../_interface/userForCreation.model";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private location: Location,
    private repository: RepositoryService
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
      ]),
      image: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
      ]),
      twitterhandle: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
      ]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  public onCancel = () => {
    this.location.back();
  };

  public createUser = (userFormValue) => {
    if (this.userForm.valid) {
      this.executeUserCreation(userFormValue);
    }
  };

  private executeUserCreation = (userFormValue) => {
    let user: UserForCreation = {
      name: userFormValue.name,
      image: userFormValue.image,
      twitterhandle: userFormValue.twitterhandle,
    };

    let apiUrl = "users";
    this.repository.create(apiUrl, user).subscribe(
      (res) => {
        //this is temporary, until we create our dialogs
        this.location.back();
      },
      (error) => {
        //temporary as well
        this.location.back();
      }
    );
  };
}
