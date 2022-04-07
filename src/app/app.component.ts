import { Component, OnInit } from '@angular/core';

export enum SelectedPage {
  home = 'home',
  portfolio = 'portfolio',
  contact = 'contact',
  about = 'about'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public selectedPageEnum = SelectedPage;
  public currentSelection: SelectedPage;

  constructor() {

  }

  ngOnInit(): void {
    this.currentSelection = this.selectedPageEnum.home;
  }

  public changeSelection(selection: SelectedPage): void {
    this.currentSelection = selection;
  }


}
