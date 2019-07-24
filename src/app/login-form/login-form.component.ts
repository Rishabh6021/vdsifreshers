import { Credential } from './../credential';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: Credential = {userName: '' , passWord : ''};
  status: string;
  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.user.userName === 'india' 
         && this.user.passWord === 'india'){
 this.status = 'valid user';
         } else {
          this.status = 'in valid user';
         }

  }
}
