import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BusMutationGQL, BusSeatConfigurationsGQL} from '../../../../generated/graphql';
import {map} from 'rxjs/operators';
import {echo} from '../../../../util/print';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bus-form',
  templateUrl: './bus-form.component.html',
  styleUrls: ['./bus-form.component.scss']
})
export class BusFormComponent implements OnInit {
  @Input() carrier;
  busSeatConfiguration;
  busSeatConfigurations$;
  busForm = this.formBuilder.group({
    busNumber: ['', Validators.required],
    plateNumber: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private busSeatConfigurationsGQL: BusSeatConfigurationsGQL,
    private busMutation: BusMutationGQL) {
    this.busSeatConfigurations$ = busSeatConfigurationsGQL
      .watch({}).valueChanges
      .pipe(map((response) => response.data.busSeatConfigurations.edges));
  }

  ngOnInit(): void {
  }

  selectBusSeatConfiguration(busSeatConfiguration): void {
    this.busSeatConfiguration = busSeatConfiguration;
  }
  submit(): void{
    const input = this.busForm.value;
    input.busSeatConfiguration = this.busSeatConfiguration.node.id;
    input.carrier = this.carrier.id;
    echo(input);
    this.busMutation.mutate({input: input}).subscribe(
      (bus) => {
        this.route.navigate(['/carrier/' + this.carrier.id + '/buses']);
      }
    );
  }
}
