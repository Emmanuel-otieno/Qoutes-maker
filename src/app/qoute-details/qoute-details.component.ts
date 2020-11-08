import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  @Input() qoute: Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
