import { Component, Input, OnInit} from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: 'myapp-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent implements OnInit {

  @Input('recepeItem') recipe: Recipe; 

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}