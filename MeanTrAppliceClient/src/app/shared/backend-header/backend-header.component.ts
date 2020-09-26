import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.scss']
})
export class BackendHeaderComponent implements OnInit {
  user:any;
  rols:boolean;
  constructor(
    private authService: AuthService,
    private router: Router,

  ) {
    this.user = this.authService.userValue;
   }

  ngOnInit() {

  }

userOrAdmin(){
  if( this.user.payload.authorization ==='Admin')
  {
   return true
  }
  else{
    return false;
  }

}
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
