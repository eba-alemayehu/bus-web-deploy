import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-trip-form',
  templateUrl: './edit-trip-form.component.html',
  styleUrls: ['./edit-trip-form.component.scss']
})
export class EditTripFormComponent implements OnInit {
  @Input() tripId;
  constructor() { }

  ngOnInit(): void {
  }

}
