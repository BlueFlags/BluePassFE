import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninupService } from 'src/app/services/signinup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private SigninupService:SigninupService, private router:Router) { }
  yeniUye:any;
  ngOnInit(): void {
    if(this.SigninupService.durum==true){
      this.router.navigate(['/home'])
    }
  }

  toSignUp(yeniUye:any){
    this.SigninupService.register(yeniUye);
  }

}
