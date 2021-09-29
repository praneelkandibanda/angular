import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Estates } from '../estate/estates';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http:HttpClient) { }

  estatesUrl:string="http://localhost:2222/estates";

  getAllEstates():Observable<Estates[]>{
    let observable:Observable<Estates[]>=this.http.get<Estates[]>(this.estatesUrl);
      return observable;
    }
    
    deleteEstates(id:number):Observable<void>{
      let observable:Observable<void>=this.http.delete<void>(`${this.estatesUrl}/${id}`);
        return observable;
      }

      getEstate(id:number):Observable<Estates>{
        return this.http.get<Estates>(`${this.estatesUrl}/${id}`); 
      }
      
      updateEstates(estates:Estates):Observable<any>{
        return this.http.put(`${this.estatesUrl}/${estates.id}`,estates);
      }
      addEstates(estates:Estates):Observable<any>{
        return this.http.post(`${this.estatesUrl}`,estates);
      }
  }


