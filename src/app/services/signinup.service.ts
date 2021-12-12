import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninupService {

  constructor(private http: HttpClient, private router: Router) { }
  path = environment.path;

  // getUsers() {
  //   return this.http.get(this.path + "/controller");
  // }

  login(login: any) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/login',
      login, { headers: headers }).subscribe(data => {
        this.tokenKayit(data);
        this.router.navigate(['']);
      })

  }
  tokenKayit(data:any) {
    localStorage.setItem("token", data['token'])
  }

  logout() {
    localStorage.removeItem("token")
  }

  get durum() {
    return !!localStorage.getItem("token")
  }
  get token() {
    return localStorage.getItem("token")
  }


  //REGİSTER
  register(uye: any) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    this.http.post(this.path + '/login',
      uye, { headers: headers }).subscribe(data => {
        alert("asd");
      })

  }
}
