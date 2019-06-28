import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'myapp-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipeItem: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeItem.ingredients);
  }


  
}