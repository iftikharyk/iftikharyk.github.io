import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openLocation = false;

  constructor() { }

  ngOnInit() {
  }

  toggleLocation() {
    this.openLocation = !this.openLocation;
  }

}
