import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";



@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ]
})

export class AppModule {

}