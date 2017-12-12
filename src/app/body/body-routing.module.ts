import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { AnimationComponent } from './animation/animation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { DataService } from '../data.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registrationform',
    component: RegistrationformComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    // HomeComponent,
    // RegistrationformComponent
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [HomeComponent, RegistrationformComponent, AnimationComponent],
  exports: [HomeComponent, RegistrationformComponent],
  providers: []
})
export class BodyRoutingModule { }
