import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {
    if (form.status === "VALID") {
      this.navigateToApp();
    }
  }
  public skipRegistration(): void {
    this.navigateToApp();
  }
  private navigateToApp(): void {
    localStorage.setItem('auth', "true");
    this.router.navigate(["/app"]); this.router.navigate(["/app"]);
  }
}
