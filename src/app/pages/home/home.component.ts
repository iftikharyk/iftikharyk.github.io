import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('first1') first1;
  @ViewChild('first2') first2;
  @ViewChild('first3') first3;

  @ViewChild('second1') second1;
  @ViewChild('second2') second2;
  @ViewChild('second3') second3;

  toggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tapClick() {

    this.toggled = !this.toggled;

    if (this.toggled) {

      setTimeout(() => {
        this.first1.nativeElement.style.display = "none";
        this.second1.nativeElement.style.display = "block";
      }, 500);

      setTimeout(() => {
        this.first2.nativeElement.style.display = "none";
        this.second2.nativeElement.style.display = "block";
      }, 700);

      setTimeout(() => {
        this.first3.nativeElement.style.display = "none";
        this.second3.nativeElement.style.display = "block";
      }, 900);

    } else {

      setTimeout(() => {
        this.first1.nativeElement.style.display = "block";
        this.second1.nativeElement.style.display = "none";
      }, 500);

      setTimeout(() => {
        this.first2.nativeElement.style.display = "block";
        this.second2.nativeElement.style.display = "none";
      }, 700);

      setTimeout(() => {
        this.first3.nativeElement.style.display = "block";
        this.second3.nativeElement.style.display = "none";
      }, 900);

    }

  }

}
