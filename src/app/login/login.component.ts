import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return ;
    }

    /*
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let found = users.find(x=> x.email === this.loginForm.value.email && x.password === this.loginForm.value.password);
    
    if(found !== undefined)
    {
      localStorage.setItem('connected-user', JSON.stringify(found));
      // this.route.navigate(['/todo-list']);
      this.route.navigateByUrl('/todo-list');
    }
    else{
      alert("SVP vérifier votre email et password?")
    }*/
    

    this.authService.login(this.loginForm.value).subscribe((response)=>{
          if(response.length > 0)
          {
            this.route.navigateByUrl('/todo-list');
            localStorage.setItem('token', response[0].email);
          }
      }, (error)=>{
        console.log(error);
      });
  }

}
