import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: 'myapp-recipes',
  templateUrl: './recipes.component.html'
})

export class RecipesComponent implements OnInit {
  
  selectedRecipeItem: Recipe;

  constructor() {

  }

  ngOnInit() {

  }


  
}