import { Component, OnInit } from '@angular/core';
import { categories,ingredients} from "../panData";
import { Ingredient } from "../ingredient.model";
import { plsService } from '../plsService';

@Component({
  selector: 'app-production-line-schematic',
  templateUrl: './production-line-schematic.component.html',
  styleUrls: ['./production-line-schematic.component.css']

})

export class ProductionLineSchematicComponent implements OnInit {
  title = 'Production Line Schematic Application';
  allIngredients: Ingredient[] = [];
  ingredients = ingredients.ingredients;
  leftPanelIngredients = ingredients.ingredients;

  categories = categories.categories;
  // categories = categories.categories;
  saveAllPans: any[];

  constructor(private service: plsService) { }

  ngOnInit() {
    const servicePans = JSON.parse(this.service.getIngredients());
    this.saveAllPans = servicePans || [];

    for (let ingredientData of this.ingredients) {
      const ing = new Ingredient()
      ing.ingredient = ingredientData.ingredient;
      this.allIngredients.push(ingredientData)
    }

    return this.allIngredients;
  }


  onSave() {
    if (confirm("Are you sure you want to save all pans?"))
      this.service.setIngredients(this.saveAllPans);
  }



  toggleCategory(category: Object) {
    category["hide"] = !category["hide"];
    console.log(category);
    return category; { }
  }

  toggleItem(item: Object) {
    item["hide"] = !item["hide"];
    return item;
  }

  //closes all categories that might be open 
  toggleAllClosed() {
    for (const category of this.categories) {
      category["hide"] = false;
    }
  }



  //checks to see if its a valid search searchedTerm or empty string
  search(searchedTerm) {
    if (searchedTerm.trim() === '') {
      this.leftPanelIngredients = this.ingredients;
      this.toggleAllClosed();
      return;
    }
    //a variable called search result of type Ingredient 
    const searchResults: Ingredient[] = [];
    const categoryContainingIng: any[] = [];
    // a variable named regex thats creating a new instance of regex and initalizing it to a empty array
    const regex = new RegExp(searchedTerm, 'i');

    for (const ing of this.allIngredients) {
      //testin  whether the search term matches the ing
      if (regex.test(ing.ingredient)) {
        searchResults.push(ing);
      }
    }

    //two loops because categories is a list and so is search results
    for (const ingredient of searchResults) {
      for (const category of this.categories) {
        if (ingredient.category_uuid === category.category_uuid && !categoryContainingIng.includes(category)) {
          categoryContainingIng.push(category);
        }
      }
    }
    // closes all panels and then open up the categories that the searched Results are in
    this.toggleAllClosed();
    for (const category of categoryContainingIng) {
      this.toggleCategory(category);
    }

    this.leftPanelIngredients = searchResults;

    return searchResults;
  }

  getSelectedIngredient(item: any) {
    this.saveAllPans.push(item);
    for (var i = 0; i < item.backup_pans_needed; i++) {
      this.saveAllPans.push(Object.assign({}, item, { backupIngredient: true }));
    }
  }
}

