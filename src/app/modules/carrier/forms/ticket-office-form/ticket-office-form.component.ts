import { Component, OnInit } from '@angular/core';
import {CitiesGQL} from '../../../../generated/graphql';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-ticket-office-form',
  templateUrl: './ticket-office-form.component.html',
  styleUrls: ['./ticket-office-form.component.scss']
})
export class TicketOfficeFormComponent implements OnInit {
   cities = null;
    ticketOfficeForm: FormGroup;


  constructor(private citiesGQL: CitiesGQL, translate: TranslateService , private storageService: StorageService) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.ticketOfficeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
    });
    this.citiesGQL.watch({}).valueChanges.subscribe(
      (response) => {
        const cities = response.data.cities.edges;
        this.cities = cities;
      }
    );
  }

  submit(): void {
    console.log(this.ticketOfficeForm);
  }
}
