import { RepositoryService } from "./../../shared/repository.service";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../_interface/user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public displayedColumns = [
    "name",
    "twitterhandle",
    "details",
    "update",
    "delete",
  ];
  public dataSource = new MatTableDataSource<User>();

  constructor(private repoService: RepositoryService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers = () => {
    this.repoService.getData("users").subscribe((res) => {
      this.dataSource.data = res as User[];
    });
  };

  public redirectToDetails = (id: string) => {};

  public redirectToUpdate = (id: string) => {};

  public redirectToDelete = (id: string) => {};
}
