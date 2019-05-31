import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'myapp-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent implements OnInit {

  @Input('recepeItem') recipe: Recipe; 

  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit() {

  }

  onSelect() {
    this.recipeSelected.emit();
  }

}