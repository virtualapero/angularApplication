import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "../user-list/user-list.component";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { UserCreateComponent } from "../user-create/user-create.component";
import { UserUpdateComponent } from "../user-update/user-update.component";
import { UserDeleteComponent } from "../user-delete/user-delete.component";

const routes: Routes = [
  { path: "users", component: UserListComponent },
  { path: "details/:id", component: UserDetailsComponent },
  { path: "create", component: UserCreateComponent },
  { path: "update/:id", component: UserUpdateComponent },
  { path: "delete/:id", component: UserDeleteComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
