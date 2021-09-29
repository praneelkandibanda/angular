import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Estates } from '../estate/estates';

@Component({
  selector: 'app-estate-form',
  templateUrl: './estate-form.component.html',
  styleUrls: ['./estate-form.component.css']
})
export class EstateFormComponent implements OnInit {
@Input()
  estatesList:Estates[]=[];
  @Output()
    delEvent:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
deleteEstate(id:number):void{
  console.log("Deleting estates: "+id);
  this.delEvent.next(id);
  
}

}
