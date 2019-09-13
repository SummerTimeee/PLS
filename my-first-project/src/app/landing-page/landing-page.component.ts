import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  pageTitle: string = 'Production Line Schematic';
  date: string = 'June 26 2019';
  openExisting: string = 'Open Existing PLS';
  createNew: string = 'Create New PLS';
  publish : string = 'Publish PLS';


  constructor() { }

  ngOnInit() {
  }

}
