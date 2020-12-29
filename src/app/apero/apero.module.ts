import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AperoListComponent } from "./apero-list/apero-list.component";
import { AperoRoutingModule } from "./apero-routing/apero-routing.module";
import { MaterialModule } from "./../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AperoDetailsComponent } from './apero-details/apero-details.component';
import { AperoDataComponent } from './apero-details/apero-data/apero-data.component';

@NgModule({
  declarations: [AperoListComponent, AperoDetailsComponent, AperoDataComponent],
  imports: [CommonModule, AperoRoutingModule, MaterialModule, FlexLayoutModule],
})
export class AperoModule {}
