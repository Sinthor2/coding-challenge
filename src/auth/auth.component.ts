import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auth',
  animations: [
    trigger(
      'LoginEnterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ])
      ]
    )
  ],
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
