import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'myapp-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Sample description', 'https://www.wellplated.com/wp-content/uploads/2018/05/Instant-Pot-Shredded-Chicken-Mole-Tacos-600x714.jpg')
  ];

  constructor() {

  }// end function

  ngOnInit() {

  }// end function
}// end class