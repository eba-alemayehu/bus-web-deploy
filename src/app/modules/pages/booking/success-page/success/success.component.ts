import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lotties/success.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
