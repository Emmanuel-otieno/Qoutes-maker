import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQuote = new Qoutes(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Qoutes>();

  constructor() { }

  ngOnInit(): void {
  }

}
