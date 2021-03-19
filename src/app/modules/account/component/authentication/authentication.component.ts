import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  _close(): void{
    this.cancel.emit();
  }

  login(): void {
    this.cancel.emit();
  }

  signup(): void {
    this.cancel.emit();
  }
}
