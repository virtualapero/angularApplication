import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AperoListComponent } from "./apero-list/apero-list.component";
import { AperoRoutingModule } from "./apero-routing/apero-routing.module";
import { MaterialModule } from "./../material/material.module";

@NgModule({
  declarations: [AperoListComponent],
  imports: [CommonModule, AperoRoutingModule, MaterialModule],
})
export class AperoModule {}
