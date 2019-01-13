import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { PasswordsEqualDirective } from './directives/passwords-equal.directive';

@NgModule({
  declarations: [
    AuthComponent,
    PasswordsEqualDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class AuthModule { }
