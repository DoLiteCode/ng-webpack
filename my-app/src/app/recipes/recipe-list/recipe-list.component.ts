import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'myapp-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [];


  constructor(private recipeService: RecipeService) {
    
  }// end function

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }// end function
}