import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RoutingModule } from "./routing/routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from "./user/user.module";
import { NotFoundComponent } from "./error-pages/not-found/not-found.component";
import { ServerErrorComponent } from "./error-pages/server-error/server-error.component";

import { SharedModule } from "../app/shared/shared.module";
import { AperoModule } from "./apero/apero.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NotFoundComponent,
    ServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    AperoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
