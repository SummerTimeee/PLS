import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  name: string = 'Celebration | 2019 Salad Revision 1.0';

  @Output()
  onSave: EventEmitter<void> = new EventEmitter<void>()
}
