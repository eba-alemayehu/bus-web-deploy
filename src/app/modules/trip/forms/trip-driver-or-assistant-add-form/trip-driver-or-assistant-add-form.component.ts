import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {echo} from '../../../../util/print';
import {MatDialogRef} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

@Component({
  selector: 'app-trip-driver-or-assistant-add-form',
  templateUrl: './trip-driver-or-assistant-add-form.component.html',
  styleUrls: ['./trip-driver-or-assistant-add-form.component.scss']
})
export class TripDriverOrAssistantAddFormComponent implements OnInit {
  selectedUser = null;
  @Output() addUser: EventEmitter<any> = new EventEmitter<any>();
  constructor(translate: TranslateService , private storage: StorageService
  ) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

  userSelected(user: any): void {
    this.selectedUser = user;
  }

  add(): void {
    this.addUser.emit(this.selectedUser);
  }
}
