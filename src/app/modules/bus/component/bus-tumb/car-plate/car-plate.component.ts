import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-plate',
  templateUrl: './car-plate.component.html',
  styleUrls: ['./car-plate.component.scss']
})
export class CarPlateComponent implements OnInit {
  @Input() plateNumber;

  constructor() { }

  ngOnInit(): void {
  }

}
