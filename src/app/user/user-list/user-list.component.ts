import { RepositoryService } from "./../../shared/repository.service";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../_interface/user.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { ErrorHandlerService } from "../../shared/error-handler.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    "name",
    "twitterhandle",
    "details",
    "update",
    "delete",
  ];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllUsers = () => {
    this.repoService.getData("users").subscribe(
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

  public redirectToDetails = (id: string) => {};

  public redirectToUpdate = (id: string) => {};

  public redirectToDelete = (id: string) => {};
}
