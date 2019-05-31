import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'myapp-shopping-list',
  templateUrl:'./shopping-list.component.html'
})

export class ShoppintListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  constructor() {

  }

  ngOnInit() {

  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}