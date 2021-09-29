import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from '../adminlogin/alogin.model';
import { UserModel } from '../userlogin/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  
  getUser(username:string,password:string):Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`http://localhost:2222/users/?username=${username}&password=${password}`)
  }
      
    getAdmin(username:string,password:string):Observable<AdminModel[]>{
      return this.http.get<AdminModel[]>(`http://localhost:2222/admin/?username=${username}&password=${password}`)

    }
   
 }
