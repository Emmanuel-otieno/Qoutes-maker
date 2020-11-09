import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {

  newQoute = new Qoutes(0,"","",new Date());
  @Output() addQoute = new EventEmitter<Qoutes>();

  submitQoute(form:NgForm){
    this.addQoute.emit(this.newQoute);
    form.resetForm()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
