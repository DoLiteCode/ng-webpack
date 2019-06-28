import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'myapp-shopping-list',
  templateUrl:'./shopping-list.component.html'
})

export class ShoppintListComponent implements OnInit {

  ingredients:Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.shoppingListService.addIngredient(newIngredient);
  }

}