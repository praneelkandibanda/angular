import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserModel } from './login.model';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginform:FormGroup;
  // formValue:FormGroup
  users:Array<UserModel>
  constructor(private readonly formBuilder:FormBuilder,
    private loginService:LoginService,
    private router:Router) { 
      this.loginform=this.formBuilder.group({
        username:[''],
        password:['']
        
      })
      this.users=[];
    }
 
  
  ngOnInit(): void {
  }
  CheckUser(){
    console.log("entered function");
    // if(this.loginform.valid)
    // {
      this.loginService.getUser(this.loginform.value.username,this.loginform.value.password)
      .subscribe((userModel:UserModel[])=>{
        if(userModel.length)
        {
          console.log(userModel)
          this.router.navigateByUrl('/userestates')
        }
        else
        {
          alert('Invalid Credentials')
        }
      })
  }
}
