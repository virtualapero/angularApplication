import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "./../../shared/repository.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { UserForCreation } from "../../_interface/userForCreation.model";
import { MatDialog } from "@angular/material/dialog";
import { SuccessDialogComponent } from "src/app/shared/dialogs/success-dialog/success-dialog.component";
import { ErrorHandlerService } from "../../shared/error-handler.service";
import { User } from "./../../_interface/user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.css"],
})
export class UserDeleteComponent implements OnInit {
  public userForm: FormGroup;
  private dialogConfig;
  public user: User;

  constructor(
    private location: Location,
    private repository: RepositoryService,
    private dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
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

    this.getUserById();
  }

  private getUserById = () => {
    let userId: string = this.activeRoute.snapshot.params["id"];

    let userByIdUrl: string = `users/${userId}`;
    this.repository.getData(userByIdUrl).subscribe(
      (res) => {
        this.user = res as User;
        this.userForm.patchValue(this.user);
        console.log(this.user);
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  };

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };

  public onCancel = () => {
    this.location.back();
  };

  public deleteUser = (userFormValue) => {
    if (this.userForm.valid) {
      this.executeUserDelete(userFormValue);
    }
  };

  private executeUserDelete = (userFormValue) => {
    let user: UserForCreation = {
      name: userFormValue.name,
      image: userFormValue.image,
      twitterhandle: userFormValue.twitterhandle,
    };

    let apiUrl = `users/${this.user.id}`;
    this.repository.delete(apiUrl).subscribe(
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
        this.errorHandler.dialogConfig = { ...this.dialogConfig };
        this.errorHandler.handleError(error);
        //this.location.back();
      }
    );
  };
}
