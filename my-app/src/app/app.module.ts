import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ServerComponent
  ]
})

export class AppModule {

}