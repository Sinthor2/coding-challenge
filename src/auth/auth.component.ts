import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public registerForm = {
    email: '',
    password: '',
    password_confirm: ''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("submit");
  }

}
