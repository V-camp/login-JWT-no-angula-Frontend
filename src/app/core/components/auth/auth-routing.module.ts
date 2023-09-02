import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingComponent } from './pages/sing/sing.component';

const routes: Routes = [
  {
    path: '',
    component: SingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
