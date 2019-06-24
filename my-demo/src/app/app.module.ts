import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight.directive";
import { UnlessDirective } from "./directives/unless.directive";



@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ]
})

export class AppModule {

}