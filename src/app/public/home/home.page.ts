import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  selectTabs = "Covid"

  constructor() { 
    console.log(this.selectTabs)
  }

  ngOnInit() {
  }

}
