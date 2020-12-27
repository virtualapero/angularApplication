import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "./../../shared/repository.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { UserForCreation } from "../../_interface/userForCreation.model";
import { MatDialog } from "@angular/material/dialog";
import { SuccessDialogComponent } from "src/app/shared/dialogs/success-dialog/success-dialog.component";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.css"],
})
export class UserCreateComponent implements OnInit {
  public userForm: FormGroup;
  private dialogConfig;

  constructor(
    private location: Location,
    private repository: RepositoryService,
    private dialog: MatDialog
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
        Validators.maxLength(100),
      ]),
    });
    this.dialogConfig = {
      height: "200px",
      width: "400px",
      disableClose: false,
      data: {},
    };
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
        let dialogRef = this.dialog.open(
          SuccessDialogComponent,
          this.dialogConfig
        );
        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed().subscribe((result) => {
          this.location.back();
        });
      },
      (error) => {
        //temporary as well
        this.location.back();
      }
    );
  };
}
