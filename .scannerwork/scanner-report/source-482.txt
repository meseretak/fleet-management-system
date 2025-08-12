import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { AuthService } from '../auth.service';
import { JwtResponse } from '../types/jwtResponse';
import { LoginHistory } from '../types/LoginHistory';
import { UserDetails } from '../types/userdetail';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  delegated: any;
  currentYear: number;
  constructor(
    private authService: AuthService, 
    private route: Router,
    private alert:AlertService
    ) {}
  ngOnInit(): void {
   this.isNotLoggedIn();
   this.currentYear = new Date().getFullYear();

  }
  public jwt: any = {};
  public role!: any;
  userDetails: UserDetails | undefined;
  userName: any;
  credentialError:any=null;
  directorate: any;
  public isAuthenticated: boolean = this.authService.isAuthenticated;
  generateJwt(loginForm: NgForm) {
    this.userDetails = loginForm.value;

    this.userName = this.userDetails?.username;
    this.authService.generate(loginForm.value).subscribe(
      (response: JwtResponse) => {
       // console.log(response);
        this.authService.isAuthenticated = true;
       // console.log(this.authService.isAuthenticated);
        this.jwt = response.jwt;
        this.role = response.roleId;
        this.directorate = response.directorate;
        this.delegated = response.delegated;

        sessionStorage.setItem('role', this.role);
        sessionStorage.setItem('jwt', this.jwt);
        sessionStorage.setItem('username', this.userName);
        sessionStorage.setItem('directorate', this.directorate);
        sessionStorage.setItem('delegated', this.delegated);

        /*if(this.authService.isLoggedIn(this.userName)==true){
             sessionStorage.setItem('isLogged','yes');
             this.route.navigate(['home']); 
          }else{
            sessionStorage.removeItem('isLogged');
            this.route.navigate(['changePassword']);
          }*/
        this.authService.isLoggedIn(this.userName).subscribe(
          (response: LoginHistory) => {
            //console.log(response);
            if (response != null) {
              sessionStorage.setItem('isLogged', 'yes');
              this.route.navigate(['/home']);
            } else if (response == null) {
              sessionStorage.removeItem('isLogged');

              this.route.navigate(['/changePassword']);
            }
          },
          (error: HttpErrorResponse) => {}
        );
        loginForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.credentialError = "Incorrect username or password";
        loginForm.reset();
      }
    );
  }
  isNotLoggedIn(){
    if(sessionStorage.getItem("jwt")!=null){
      this.route.navigate(['/home']);
    }
  }
  isLoggedIn() {
    if (this.authService.isAuthenticated) {
      return this.authService.isLoggedIn(this.userName);
    } else {
      this.route.navigate(['/login']);
      return true;
    }
  }
  isNotAuthenticated(){
    if(!sessionStorage.getItem("jwt") && !sessionStorage.getItem("isLogged")){
      return true;
    }else{
      return false;
    }
}
}
