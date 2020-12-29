import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AperoListComponent } from "../apero-list/apero-list.component";
import { AperoDetailsComponent } from "../apero-details/apero-details.component";

const routes: Routes = [
  { path: "aperos", component: AperoListComponent },
  { path: "details/:id", component: AperoDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AperoRoutingModule {}
