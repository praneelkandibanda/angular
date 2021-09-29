import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estates } from '../estate/estates';
import { EstateService } from '../service/estate.service';

@Component({
  selector: 'app-estate-image',
  templateUrl: './estate-image.component.html',
  styleUrls: ['./estate-image.component.css']
})
export class EstateImageComponent implements OnInit {
  @Input()
  estatesList:Estates[]=[];
 slides = [
    {'image': 'https://tse3.mm.bing.net/th?id=OIP.LIn4dmx_P25jbioEE9Bl6AHaE6&pid=Api&P=0&w=269&h=180'}, 
    {'image': 'https://tse3.mm.bing.net/th?id=OIP.9RkP-qez-ZtarJ6Ins1LfgHaFj&pid=Api&P=0&w=213&h=160'},
    {'image': 'https://s3-eu-west-2.amazonaws.com/homebuilding-assets/prodwebsite/content/uploads/2012/04/Inside-Outside-Spaces-Sliding-Glass-Doors.jpg'}, 
    {'image': 'https://s3-eu-west-2.amazonaws.com/homebuilding-assets/prodwebsite/content/uploads/2016/07/BTOI-Threshold2-outside-inside1.jpg'}, 
    {'image': 'https://images.adsttc.com/media/images/5aa1/1dd0/f197/cc24/cd00/006d/large_jpg/016-Bukit_Kopi_Residence_(TWA)_-16__18.11.2017-.jpg?1520508341'}
  ];
  constructor(private router:Router,
    private route:ActivatedRoute,
    private estateservice:EstateService) { }

  ngOnInit(): void {
    
  }
  back():void{
    this.router.navigate(["/estates"])
  }

}
