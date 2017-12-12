import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
@Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
