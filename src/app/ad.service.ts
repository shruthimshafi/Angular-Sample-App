import { Injectable } from '@angular/core';
import { JobAdComponent } from './job-ad/job-ad.component';
import { JobProfileComponent } from './job-profile/job-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {

  getAds() {
    return[
      new AdItem(JobProfileComponent, {name: 'Shruthi', bio: 'Brave as they come'}),
      new AdItem(JobProfileComponent, {name: 'Shreya', bio: 'Smart as they come'}),
      new AdItem(JobAdComponent,   {headline: 'Hiring for several positions', body: 'Submit your resume today!'}),
      new AdItem(JobAdComponent,   {headline: 'Openings in all departments', body: 'Apply today'}),
    ];
  }

  constructor() { }

}
