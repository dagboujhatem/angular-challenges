import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';
import { emailMismatchValidator } from '../validators/email-mismatch.validator';
import { firstNameValidator } from '../validators/firstName.validator';
import { passwordMismatchValidator } from '../validators/password-mismatch.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, firstNameValidator]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^((?!admin).)*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    emailConfirmation: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
  },{
    validators: [ emailMismatchValidator, passwordMismatchValidator]
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { 
  }

  register(){
    this.submitted = true;
    if(this.registerForm.invalid)
    {
      return;
    }
    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // users.push(this.registerForm.value);
    // localStorage.setItem('users', JSON.stringify(users));    

    // Second Way with JSON server
    this.authService.register(this.registerForm.value).subscribe((response)=>{
        this.router.navigateByUrl('/login');
    }, (error)=>{
      console.log(error);
    });
  }

}
