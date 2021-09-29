import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstateService } from '../service/estate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute,
    private estateservice:EstateService) { }

  ngOnInit(): void {
  }
}
