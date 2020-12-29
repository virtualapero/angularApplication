import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { RepositoryService } from "./../../shared/repository.service";
import { MatTableDataSource } from "@angular/material/table";
import { Apero } from "../../_interface/apero.model";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { ErrorHandlerService } from "../../shared/error-handler.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-apero-list",
  templateUrl: "./apero-list.component.html",
  styleUrls: ["./apero-list.component.css"],
})
export class AperoListComponent implements OnInit, AfterViewInit {
  public displayedColumns = ["datum", "image", "details", "update", "delete"];
  public dataSource = new MatTableDataSource<Apero>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private repoService: RepositoryService,
    private errorService: ErrorHandlerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllAperos();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public getAllAperos = () => {
    this.repoService.getData("aperos").subscribe(
      (res) => {
        this.dataSource.data = res as Apero[];
        //console.log(this.dataSource.data);
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  };
  public redirectToDetails = (id: string) => {
    let url: string = `/apero/details/${id}`;
    this.router.navigate([url]);
  };
  public redirectToUpdate = (id: string) => {};
  public redirectToDelete = (id: string) => {};
}
