import { Component, Input, OnInit } from '@angular/core';
import { Estates } from '../estate/estates';

@Component({
  selector: 'app-userestatecard',
  templateUrl: './userestatecard.component.html',
  styleUrls: ['./userestatecard.component.css']
})
export class UserestatecardComponent implements OnInit {
  @Input()
  estatesList:Estates[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
