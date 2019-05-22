import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ]
})

export class AppModule {

}