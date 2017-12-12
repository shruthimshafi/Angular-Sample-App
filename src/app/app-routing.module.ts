import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BodyModule } from './body/body.module';
import { LoginComponent } from './login/login.component';

const route: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BodyModule,
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
