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

  @ViewChild('linker1') linker1;
  @ViewChild('linker2') linker2;
  @ViewChild('linker3') linker3;

  toggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  tapClick() {

    this.toggled = !this.toggled;

    if (this.toggled) {

      setTimeout(() => {
        this.linker1.nativeElement.style.pointerEvents = "all";
        this.linker2.nativeElement.style.pointerEvents = "all";
        this.linker3.nativeElement.style.pointerEvents = "all";
      }, 500);

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
        this.linker1.nativeElement.style.pointerEvents = "none";
        this.linker2.nativeElement.style.pointerEvents = "none";
        this.linker3.nativeElement.style.pointerEvents = "none";
      }, 500);

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
