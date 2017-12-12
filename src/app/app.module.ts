import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { HomeComponent } from './body/home/home.component';
// import { RegistrationformComponent } from './body/registrationform/registrationform.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { JobAdComponent } from './job-ad/job-ad.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { AdService} from './ad.service';
import { LoginComponent } from './login/login.component';
// import { MyDataService } from './my-data.service';
// import { DataService } from './data.service';

// import { AnimationComponent } from './body/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    JobAdComponent,
    JobProfileComponent,
    LoginComponent,
    // AnimationComponent,
    // HomeComponent,
    // RegistrationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent],
  entryComponents: [JobAdComponent, JobProfileComponent]
})
export class AppModule { }
