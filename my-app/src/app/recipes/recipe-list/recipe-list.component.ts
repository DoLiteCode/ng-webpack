import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'myapp-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Sample description', 'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg'),
    new Recipe('Another test Recipe', 'Aother Sample description', 'https://images.media-allrecipes.com/images/56589.png')
  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  constructor() {

  }// end function

  ngOnInit() {

  }// end function

  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}