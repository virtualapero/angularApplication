import { Component, Input, OnInit } from "@angular/core";
import { Apero } from "./../../_interface/apero.model";
import { User } from "./../../_interface/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { RepositoryService } from "./../../shared/repository.service";
import { ErrorHandlerService } from "./../../shared/error-handler.service";

@Component({
  selector: "app-apero-details",
  templateUrl: "./apero-details.component.html",
  styleUrls: ["./apero-details.component.css"],
})
export class AperoDetailsComponent implements OnInit {
  @Input() public users: User[];
  public apero: Apero;

  constructor(
    private repository: RepositoryService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getAperoDetails();
  }

  private getAperoDetails = () => {
    let id: string = this.activeRoute.snapshot.params["id"];
    let apiUrl: string = `aperos/${id}`;

    this.repository.getData(apiUrl).subscribe(
      (res) => {
        this.apero = res as Apero;
      },
      (error) => {
        this.errorHandler.handleError(error);
      }
    );
  };
}
