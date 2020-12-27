import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "../user-list/user-list.component";
import { UserDetailsComponent } from "../user-details/user-details.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "details/:id", component: UserDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
