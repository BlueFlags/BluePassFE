import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninupService {

  constructor(private http:HttpClient) { }
  path=environment.path;

  getUsers(){
    return this.http.get(this.path+"/controller");
  }


}
