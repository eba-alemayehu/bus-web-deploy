import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../../core/service/storage.service';

enum AuthenticationState {
  LOGIN,
  SIGNUP,
  CONFIRMATION
}
@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  state = AuthenticationState.LOGIN;
  constructor(translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
  }

  _close(): void{
    this.cancel.emit();
  }

  login(loggedIn): void {
    this.cancel.emit(loggedIn);
  }

  signup(loggedIn): void {
    this.cancel.emit();
  }
}
