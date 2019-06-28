import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'myapp-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  
  selectedRecipeItem: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipeItem = recipe;
      }
    );
  }


  
}