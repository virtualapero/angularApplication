import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AperoListComponent } from "../apero-list/apero-list.component";

const routes: Routes = [{ path: "aperos", component: AperoListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AperoRoutingModule {}
