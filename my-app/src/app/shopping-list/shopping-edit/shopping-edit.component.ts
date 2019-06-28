import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'myapp-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );

    //this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
    
  }

}