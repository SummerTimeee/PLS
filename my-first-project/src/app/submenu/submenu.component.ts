import { Component, Output, EventEmitter, Input } from '@angular/core';
import { squeezeBottle } from '../panData';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {
  @Output()
  getSelectedIngredient: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  ingredient: any;
  squeezeBottle = squeezeBottle;

  getPansize(item: any) {
    this.getSelectedIngredient.emit(this.ingredient)
  }

}
