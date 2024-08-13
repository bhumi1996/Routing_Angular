import { Component, ElementRef, OnInit, ViewChild, inject} from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
 @ViewChild('username') username:ElementRef;
 @ViewChild('password') password:ElementRef;
 
 authService:AuthService = inject(AuthService);
 router :Router = inject(Router);
 activeRoute :ActivatedRoute =inject(ActivatedRoute);

 onLoginClick(){
  const username = this.username.nativeElement.value;
  const password = this.password.nativeElement.value;
   const user = this.authService.login(username,password);
   console.log("Username"+username);
   console.log("password"+password);
   console.log(user);
   if(user=== undefined){
    alert('Login credentials you have entered is wrong ');
   }
   else{
    alert('welcom '+user.name+' to our servise');
    this.router.navigate(['/courses']);
   }

 }

 ngOnInit(): void {
   this.activeRoute.queryParamMap.subscribe((query)=>{
    let logout = Boolean(query.get('logout'));
    if(logout){
      this.authService.logOut;
      alert('You are now logged out ');
    }
   })
 }
}
