import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module';
import { SingComponent } from './pages/sing/sing.component';

@NgModule({
  declarations: [
    SingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
