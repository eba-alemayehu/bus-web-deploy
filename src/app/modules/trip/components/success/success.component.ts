import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor() { }
  options: AnimationOptions = {
    path: '/assets/lotties/success.json',
  };

  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
