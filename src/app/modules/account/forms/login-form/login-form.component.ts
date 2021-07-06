import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {LoginMutationGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {tap} from 'rxjs/operators';
import {StorageService} from '../../../../core/service/storage.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() goSignUp: EventEmitter<any> = new EventEmitter<any>();
  isLoading = false;
  loginForm = this.formBuilder.group({
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });
  invalidCredentialsErrors = false;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, public loginMutation: LoginMutationGQL, private storage: StorageService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (!this.loginForm.valid) return;
    this.isLoading = true;
    let phone = this.loginForm.value.phone.toLowerCase();
    if (phone.slice(0, 2) === '09') {
      phone = '+251' + phone.slice(1, phone.length);
    }
    echo(phone);
    echo(this.loginForm.value);
    this.loginMutation.mutate({
        input: {
          phone: phone,
          password: this.loginForm.value.password
        }
      }
    ).pipe(
      tap(({data}) => (data.tokenAuth.errors === null) ?
        this.storage.setToken(data.tokenAuth.token, data.tokenAuth.refreshToken) : throwError('Invalid username or password'))
    ).subscribe(
      (response) => {
        echo(response);
        if (response.data.tokenAuth.success){
          this.login.emit(true);
        } else {
          this.invalidCredentialsErrors = true;
        }
      }
    );
  }

  confirmation(): void {
  }

  _close(): void {
    this.close.emit();
  }
}
