import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inno-tech-dog-age',
  templateUrl: './dog-age.component.html',
  styleUrls: ['./dog-age.component.scss']
})
export class DogAgeComponent implements OnInit {

  name = 'Smurf';
  age = 32;
  dogAge: number | undefined;

  constructor() { }

  getDogYears() {
    this.dogAge = this.age * 7;
  }

  ngOnInit(): void {
  }

}
