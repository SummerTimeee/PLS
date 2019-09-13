
import { Component, OnInit } from '@angular/core';
import { nameDates } from "../modifyData";


@Component({
  selector: 'app-modify-delete',
  templateUrl: './modify-delete.component.html',
  styleUrls: ['./modify-delete.component.css']
})
export class ModifyDeleteComponent implements OnInit {

  nameDates = nameDates.nameDates;


  constructor() { }

  ngOnInit() {
  }

  onDelete(i) {
    if (confirm("Are you sure you want to delete ?")) {
      this.nameDates.splice(i)
    }

  }

}