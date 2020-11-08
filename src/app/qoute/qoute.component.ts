import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {

  qoutes:Qoutes[] = [
    new Qoutes(1, 'There is no good or bad news without us, there is only perception.', 'There is the event itself and the story we tell ourselves about what it means',new Date(2020,9,14)),
    new Qoutes(2,'It was all good, even when it wasn’t.','Love is sweet',new Date(2016,6,9)),
    new Qoutes(3,'One option is no choice. Two options is a dilemma.',' Three options is a choice',new Date(2010,1,12)),
    new Qoutes(4,'If you want to control things in your life so bad, work on the mind.','Focus Your Energy',new Date(2015,11,18)),
   
  ];



  toggleDetails(index){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
}

  constructor() { }

  ngOnInit(): void {
  }

}
