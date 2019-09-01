import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-color-picker',
  templateUrl: './angular-color-picker.component.html',
  styleUrls: ['./angular-color-picker.component.css']
})
export class AngularColorPickerComponent implements OnInit {

  background = '#00e067';

  onChange(value) {
    this.background = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
