import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AdminModel } from './alogin.model';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginform:FormGroup;
  // formValue:FormGroup
  admin:Array<AdminModel>
  constructor(private readonly formBuilder:FormBuilder,
    private loginService:LoginService,
    private router:Router) { 
      this.loginform=this.formBuilder.group({
        username:[''],
        password:['']
        
      })
      this.admin=[];
    }

  ngOnInit(): void {
  }
  CheckAdmin(){
    console.log("entered function");
    // if(this.loginform.valid)
    // {
      this.loginService.getAdmin(this.loginform.value.username,this.loginform.value.password)
      .subscribe((adminModel:AdminModel[])=>{
        if(adminModel.length)
        {
          console.log(adminModel)
          this.router.navigateByUrl('/estates')
        }
        else
        {
          alert('Invalid Credentials')
        }
      })
  }
}
