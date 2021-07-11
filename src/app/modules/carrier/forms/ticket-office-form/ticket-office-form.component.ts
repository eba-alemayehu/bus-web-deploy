import {Component, Input, OnInit} from '@angular/core';
import {CitiesGQL} from '../../../../generated/graphql';
import {TicketOfficeGQL} from '../../../../generated/mutation/graphql';
import {TicketOfficeGQL as TicketOfficeGQLQuery} from '../../../../generated/graphql';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';
import {echo} from '../../../../util/print';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ticket-office-form',
  templateUrl: './ticket-office-form.component.html',
  styleUrls: ['./ticket-office-form.component.scss']
})
export class TicketOfficeFormComponent implements OnInit {
  @Input('id') set id(value) {
    if (value) {
      this.ticketOfficeGQLQuery.watch({
        ticketOffice: value,
      }).valueChanges.pipe(map(response => response.data.ticketOffice)).subscribe(
        (ticketOffice) => {
          console.log(this.ticketOfficeForm);
          this.ticketOfficeForm.patchValue({
            id: ticketOffice.id,
            carreir: ticketOffice.carrier.id,
            city: ticketOffice.city.id,
            name: ticketOffice.name,
            phone: ticketOffice.phone,
            latitude: ticketOffice.city.latitude,
            longitude: ticketOffice.city.longitude,
          });
        }
      );
    }
  }

  cities = null;
  ticketOfficeForm: FormGroup;
  zoom = 8;

  lat = 9.005401;
  lng = 38.763611;
  selectedLocation;

  constructor(
    private citiesGQL: CitiesGQL,
    private ticketOfficeGQL: TicketOfficeGQL,
    private ticketOfficeGQLQuery: TicketOfficeGQLQuery,
    translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private storageService: StorageService) {
    translate.use(this.storageService.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.ticketOfficeForm = new FormGroup({
      id: new FormControl(null),
      carrier: new FormControl(this.activatedRoute.snapshot.params.id, Validators.required),
      name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      latitude: new FormControl(null),
      longitude: new FormControl(null)
    });
    this.citiesGQL.watch({}).valueChanges.subscribe(
      (response) => {
        const cities = response.data.cities.edges;
        this.cities = cities;
      }
    );
  }

  submit(): void {
    this.ticketOfficeGQL.mutate({
        input: this.ticketOfficeForm.value
      }
    ).subscribe(
      (response) => {
        this._location.back();
      }
    );
    console.log(this.ticketOfficeForm);
  }


  clickedMarker(label: string, index: number): void {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event): void {
    console.log($event.coords);
    this.selectedLocation = $event.coords;
    this.ticketOfficeForm.patchValue({
      latitude: this.selectedLocation.lat.toFixed(6),
      longitude: this.selectedLocation.lng.toFixed(6)
    });
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent): void {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
