import { RepositoryService } from "./../../shared/repository.service";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../_interface/user.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { ErrorHandlerService } from "../../shared/error-handler.service";
import { Router } from "@angular/router";
import { fromEventPattern } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    "name",
    "image",
  /*  "twitterhandle",*/
    "details",
   /* "update",
    "delete",*/
  ];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllUsers = () => {
   // this.repoService.getData("users").subscribe(
    this.repoService.getData("api-user").subscribe(
      (res) => {
        this.dataSource.data = res as User[];
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  };

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public redirectToDetails = (id: string) => {
    let url: string = `/user/details/${id}`;
    this.router.navigate([url]);
  };

  public redirectToUpdate = (id: string) => {
    const updateUrl: string = `/user/update/${id}`;
    this.router.navigate([updateUrl]);
  };

  public redirectToDelete = (id: string) => {
    const deleteUrl: string = `/user/delete/${id}`;
    this.router.navigate([deleteUrl]);
  };
}
