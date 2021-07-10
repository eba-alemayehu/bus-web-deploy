import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, } from '@angular/forms';
import {echo} from '../../../../util/print';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  keyWords = new FormControl();

  ngOnInit(): void {
  }

  submit(): void {
    echo(this.keyWords.value);
  }

}
