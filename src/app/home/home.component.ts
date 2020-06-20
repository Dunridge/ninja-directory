import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentStillLoadingError } from '@angular/compiler/src/private_import_core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory";
  myString = "I love chicken";
  myBoolean = true;
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  alertMe(val) {
    alert(val);
  }

  fireYellEvent(e) {
    console.log("fireYellEvent fired"); 
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
