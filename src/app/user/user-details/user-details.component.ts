import { Component, OnInit } from "@angular/core";
import { User } from "./../../_interface/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { RepositoryService } from "./../../shared/repository.service";
import { ErrorHandlerService } from "./../../shared/error-handler.service";


@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  public user: User;
  public showAccounts;

  constructor(
    private repository: RepositoryService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getUserDetails();
  }

  private getUserDetails = () => {
    let id: string = this.activeRoute.snapshot.params["id"];
    let apiUrl: string = `api-user/${id}`;

    this.repository.getData(apiUrl)
    .subscribe(res => {
      this.user = res as User;
    },
    (error) =>{
      this.errorHandler.handleError(error);
    })
  };
}



  
