import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myAwsomeAnimation', [
      state('small', style({
        transform : 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2)',
      })),
      transition('small <=> large', animate('500ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
    ]),
    trigger('mySecondAnimation', [
      state('inactive', style({
        backgroundColor: 'red',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: 'blue',
        transform: 'scale(1.1)'
      })),

    ])
  ]
})
export class AnimationComponent implements OnInit {
  state: string = 'small';
    animateMe() {
      this.state = (this.state === 'small' ? 'large' : 'small');
    }
    secondAnimation() {
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  constructor() { }

  ngOnInit() {
  }

}
