import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './fake-backend';

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
import { AuthenticationService } from './service/authentication.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
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
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AdService, AuthenticationService, MockBackend,
    BaseRequestOptions,fakeBackendProvider],
  bootstrap: [AppComponent],
  entryComponents: [JobAdComponent, JobProfileComponent]
})
export class AppModule { }
