import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {
  @Input()
  categories: any[];
  @Input()
  set ingredients(ingredients: any[]) {
    // clear current ingredients displayed
    this.categoryIngredients = {};
    for (let ingredient of ingredients) {
      // make a temporary array of the ingredients that are apart of the category that the current iterated ingredient is apart of
      const tempArray = this.categoryIngredients[ingredient.category_uuid] || [];
      // the key/category in the categoryIngredient object is assigned the old array and the new ingredient is added to it
      this.categoryIngredients[ingredient.category_uuid] = [...tempArray, ingredient];
    }
  };
  categoryIngredients = {};
  hideSubMenu = true;
  lastClickedItem;

 

  @Output()
  toggleAllClosed: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  toggleCategory: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  toggleItem: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  getSelectedIngredient: EventEmitter<any> = new EventEmitter<any>();


  ngOnInit() {
    for (let i = 0; i <= this.categories.length; i++) {
      this.toggleCategory.emit(this.categories[i]);
    }
  }

  filterIngredients(uuid: String): string[] {
    let filteredIngredients;
    if (uuid !== null) {
      filteredIngredients = this.ingredients.filter(item => item.category_uuid == uuid)
    }
    else {
      filteredIngredients = this.ingredients;
    }
    return filteredIngredients;
  }

  getClickedIngredient(item: any) {
    if (this.lastClickedItem) {
      if (item === this.lastClickedItem) {
        this.toggleItem.emit(this.lastClickedItem);
        this.hideSubMenu = true;
        this.lastClickedItem = undefined;
        return;
      } else {
        this.toggleItem.emit(item);
        this.toggleItem.emit(this.lastClickedItem);
      }
    } else {
      this.toggleItem.emit(item);
      this.hideSubMenu = false;
    }
    this.lastClickedItem = item;
  }

  plotSelectedIngredient() {
    this.lastClickedItem.pans_allocated = 1 + this.lastClickedItem.backup_pans_needed;
    this.getSelectedIngredient.emit(this.lastClickedItem)
  }
} 