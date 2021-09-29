import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Estates } from '../estate/estates';
import { EstateService } from '../service/estate.service';

@Component({
  selector: 'app-estate-edit',
  templateUrl: './estate-edit.component.html',
  styleUrls: ['./estate-edit.component.css']
})
export class EstateEditComponent implements OnInit {
estates:Estates={id:0,
name:'',
price:0,
location:'',
squareYards:0
}
isAdd:boolean=false;
toDo="Edit";
    constructor(private router:Router,
      private route:ActivatedRoute,
      private estateservice:EstateService) { }
  
    ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
      let id=params['id'];
      if(id<=0){
        this.isAdd=true;
        this.toDo="Add";
      }
      else{
        this.getEstate(id);
      }
    }
      )
    }
   getEstate(id:number):void{
     this.estateservice.getEstate(id).subscribe((estates:Estates)=>
     this.estates=estates
     ),
     (error:any)=>console.log("Error: "+error);
   }
  
   submit():void{
    if(this.isAdd){
      this.estateservice.addEstates(this.estates).subscribe(res=>console.log("Added: ",res),
      err=>console.log("Error occurwhile adding"));
    }
    else
      this.estateservice.updateEstates(this.estates).subscribe(res=>console.log("updated"),
      err=>console.log("Error occured updated: ",err));
      this.router.navigate(["/estates"])
   }
  cancel():void{
    console.log("Cancelled...");
    this.router.navigate(["/estates"])
    }
  }
  

