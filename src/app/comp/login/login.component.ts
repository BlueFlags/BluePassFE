import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninupService } from 'src/app/services/signinup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private SigninupService:SigninupService, private router:Router) { }
  login:any={}
  ngOnInit(): void {
    if(this.SigninupService.durum==true){
      this.router.navigate(['/home'])
    }
  }

  fLogin(x:any){
    this.SigninupService.login(x);
  }


  durum(){
    
    return this.SigninupService.durum
  }


}
