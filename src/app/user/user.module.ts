import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserRoutingModule } from "./user-routing/user-routing.module";
import { MaterialModule } from "./../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserDataComponent } from "./user-details/user-data/user-data.component";

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserDataComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule, FlexLayoutModule],
})
export class UserModule {}
