import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminModel } from '../adminlogin/alogin.model';
import { EstateService } from '../service/estate.service';
import { LoginService } from '../service/login.service';
import { Estates } from './estates';


@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  estates:Estates[]=[];
  original:Estates[]=[];
  searchText:string="";

    constructor(private estateService:EstateService,
      private loginService:LoginService,
      private router:Router) 
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
   deleteEstate(id:number):void{
     this.estates=this.original.filter(e=>e.id!=id);
     this.estateService.deleteEstates(id).subscribe(res=>console.log("Deleted..."+id))
   }
   logout():void{
    this.router.navigate(['/home'])
  }
}
