import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserRoutingModule } from "./user-routing/user-routing.module";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserDataComponent } from "./user-details/user-data/user-data.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { UserUpdateComponent } from "./user-update/user-update.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./../shared/shared.module";

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserDataComponent,
    UserCreateComponent,
    UserUpdateComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, SharedModule],
})
export class UserModule {}
