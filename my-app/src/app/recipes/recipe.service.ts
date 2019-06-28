import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schintzel',
      'A super tasty Schintzel - just awesome!', 
      'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),

    new Recipe(
      'Big Fat Burger', 
      'What else you need to say?', 
      'https://images.media-allrecipes.com/images/56589.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}