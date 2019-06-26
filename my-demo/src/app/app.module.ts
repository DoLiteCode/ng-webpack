import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerElementComponent } from "./server-blueprint/server-element/server-element.component";
import { CockpitComponent } from "./server-blueprint/cockpit/cockpit.component";
import { BasicHighlightDirective } from "./directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight.directive";
import { UnlessDirective } from "./directives/unless.directive";
import { HeaderComponent } from "./header/header.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { SampleDirectivesComponent } from "./sample-directives/sample-directives.component";
import { ServerBlueprintComponent } from "./server-blueprint/server-blueprint.component";
import { AccountComponent } from "./accounts/account/account.component";
import { NewAccountComponent } from "./accounts/new-account/new-account.component";



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
    UnlessDirective,
    HeaderComponent,
    AccountsComponent,
    SampleDirectivesComponent,
    ServerBlueprintComponent,
    AccountComponent,
    NewAccountComponent
  ]
})

export class AppModule {

}