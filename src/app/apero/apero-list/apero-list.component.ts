import { Component, OnInit } from "@angular/core";
import { RepositoryService } from "./../../shared/repository.service";
import { MatTableDataSource } from "@angular/material/table";
import { Apero } from "../../_interface/apero.model";

@Component({
  selector: "app-apero-list",
  templateUrl: "./apero-list.component.html",
  styleUrls: ["./apero-list.component.css"],
})
export class AperoListComponent implements OnInit {
  public displayedColumns = ["datum", "details", "update", "delete"];
  public dataSource = new MatTableDataSource<Apero>();

  constructor(private repoService: RepositoryService) {}

  ngOnInit() {
    this.getAllAperos();
  }

  public getAllAperos = () => {
    this.repoService.getData("aperos").subscribe((res) => {
      this.dataSource.data = res as Apero[];
      console.log(this.dataSource.data);
    });
  };
  public redirectToDetails = (id: string) => {};
  public redirectToUpdate = (id: string) => {};
  public redirectToDelete = (id: string) => {};
}
