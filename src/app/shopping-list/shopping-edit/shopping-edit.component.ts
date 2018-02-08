import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('txtName') nameRef: ElementRef;
  @ViewChild('txtAmount') amountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }
  onShoppingListAdded() {
    const amount = this.amountRef.nativeElement.value;
    const name = this.nameRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    if (name.length > 0) {
      this.ingredientAdded.emit(ingredient);
    }
  }

  onClear() {
    this.amountRef.nativeElement.value = 1;
    this.nameRef.nativeElement.value = '';
  }
}
