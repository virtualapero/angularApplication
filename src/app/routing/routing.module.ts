import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { NotFoundComponent } from "../error-pages/not-found/not-found.component";
import { ServerErrorComponent } from "../error-pages/server-error/server-error.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user",
    loadChildren: () => import("../user/user.module").then((m) => m.UserModule),
  },
  {
    path: "apero",
    loadChildren: () =>
      import("../apero/apero.module").then((m) => m.AperoModule),
  },
  { path: "404", component: NotFoundComponent },
  { path: "500", component: ServerErrorComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
