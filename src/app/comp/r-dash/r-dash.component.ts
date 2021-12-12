import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninupService } from 'src/app/services/signinup.service';

@Component({
  selector: 'app-r-dash',
  templateUrl: './r-dash.component.html',
  styleUrls: ['./r-dash.component.css']
})
export class RDashComponent implements OnInit {

  constructor(private SigninupService: SigninupService, private router: Router) { }
  alert = 0;
  ngOnInit(): void {
    if (this.SigninupService.durum == true) {
      this.router.navigate(['/home'])
    }
  }
  durum() {

    return this.SigninupService.durum
  }

  ode()
  {
    if(this.alert==2){
      this.alert=-1;
      
    }
    this.alert=this.alert+1;


  }

}
