import { Component, OnInit } from '@angular/core';
import {echo} from '../../../util/print';
import {Router} from '@angular/router';
import {$} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search($event: any): void {
    echo($event);
    this.router.navigate(['trip/search/'], {
      queryParams: $event
    });
  }
}
