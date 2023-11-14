import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor( private http:HttpClient) { }
   

  public addstudent(obj:any){
    let url = "http://localhost:8080/api/v1/employees";
    return this.http.post(url,obj,{
      headers:{
        'content-type': 'application/json',
        'Accept':'application/json'

      }
    });
  }

  public getstudent(){
    let url = "http://localhost:8080/api/v1/employees";
    return this.http.get(url,{
      headers:{
        'content-type': 'application/json',
        'Accept':'application/json'

      }
    });
  }
}
