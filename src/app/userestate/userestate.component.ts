import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Estates } from '../estate/estates';
import { EstateService } from '../service/estate.service';

@Component({
  selector: 'app-userestate',
  templateUrl: './userestate.component.html',
  styleUrls: ['./userestate.component.css']
})
export class UserestateComponent implements OnInit {

  estates:Estates[]=[];
  original:Estates[]=[];
  searchText:string="";

    constructor(private estateService:EstateService,private router:Router) 
    {
      this.estates=[];
      this.original=this.estates;
   }
  

  ngOnInit(): void {
    
    let observable:Observable<any>=this.estateService.getAllEstates();
    observable.subscribe(data=>this.estates=this.original=data);
  }
  filterEstates():void{
    this.estates=this.original.filter(
     (e)=>e.id.toString().indexOf(this.searchText)>=0||
     e.name.toUpperCase().indexOf(this.searchText.toUpperCase())>=0||
    e.price.toString().indexOf(this.searchText)>=0||
    e.location.toLowerCase().indexOf(this.searchText.toLowerCase())>=0
    
    );
   }
   logout():void{
     this.router.navigate(['/home'])
   }
}
