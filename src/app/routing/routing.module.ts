import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user",
    loadChildren: () => import("../user/user.module").then((m) => m.UserModule),
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
