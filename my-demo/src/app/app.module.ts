import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import {APP_BASE_HREF} from '@angular/common';

import { BrowserModule } from "@angular/platform-browser";


import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ServerElementComponent } from "./server-blueprint/server-element/server-element.component";
import { CockpitComponent } from "./server-blueprint/cockpit/cockpit.component";
import { BasicHighlightDirective } from "./shared/directives/basic-highlight.directive";
import { BetterHighlightDirective } from "./shared/directives/better-highlight.directive";
import { UnlessDirective } from "./shared/directives/unless.directive";
import { HeaderComponent } from "./header/header.component";
import { AccountsComponent } from "./accounts/accounts.component";
import { SampleDirectivesComponent } from "./sample-directives/sample-directives.component";
import { ServerBlueprintComponent } from "./server-blueprint/server-blueprint.component";
import { AccountComponent } from "./accounts/account/account.component";
import { NewAccountComponent } from "./accounts/new-account/new-account.component";
import { LoggingService } from "./shared/services/logging.service";
import { ServerManagerComponent } from "./server-manager/server-manager.component";
import { HomeComponent } from "./home/home.component";

const myappRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server-blueprint', component: ServerBlueprintComponent },
  { path: 'directive-test', component: SampleDirectivesComponent },
  { path: 'manage-accounts', component: AccountsComponent },
  { path: 'server-manager', component: ServerManagerComponent }
];



@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myappRoutes, {enableTracing: false})
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
    NewAccountComponent,
    ServerManagerComponent,
    HomeComponent
  ],
  providers: [
    LoggingService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})

export class AppModule {

  constructor() {
    console.log('www start server');
  }

}