import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {of, throwError} from 'rxjs';
import {UserCreateMutationGQL, UsersGQL} from '../../../../generated/graphql';
import {echo} from '../../../../util/print';
import {StorageService} from '../../../../core/service/storage.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() signup: EventEmitter<any> = new EventEmitter<any>();
  @Output() goLogin: EventEmitter<any> = new EventEmitter<any>();

  step = 1;
  registeredUser = null;
  canFinish = false;
  filteredUsers = [];
  selectedUser = null;
  selectedUserError = null;
  confirm = {
    email: false,
    phone: false
  };

  phoneExistValidator = (usersGQL: UsersGQL) => (c: AbstractControl) => {
    if (!c || String(c.value).length === 0) {
      return of(null);
    }
    let phone = c.value;
    if (phone.slice(0, 1) === '0') {
      phone = '+251' + phone.slice(1);
    }
    return this.usersGQL.fetch({
      phone: phone
    }).pipe(
      map((users) => {
        return users.data.busUsers.edges.length > 0 ? {exist: true} : null;
      })
    );
  }
  signupForm = this.builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: new FormControl('', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$'), this.phoneExistValidator(this.usersGQL)),
    password: ['', Validators.required, Validators.minLength(6)],
    referredBy: [null],
    confirmPassword:
      new FormControl(null, [Validators.required])
  }, {validator: this.passwordConfirming});
  isLoading = false;
  error = null;

  constructor(
    private usersGQL: UsersGQL,
    private createUserMutation: UserCreateMutationGQL,
    private builder: FormBuilder,
    public router: Router,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private storage: StorageService,
    private snackBar: MatSnackBar,
    translate: TranslateService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  passwordConfirming(c: AbstractControl): { match: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      c.get('confirmPassword').setErrors({
        match: true
      });
      return {match: true};
    }
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      (queryParam) => {
        if (queryParam?.confrim) {
          this.step = 2;
        }
      }
    );
    this.signupForm.controls['referredBy'].valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(phone => {
          if (phone.slice(0, 1) === '0') {
            phone = '+251' + phone.slice(1);
          }
          return phone;
        }),
        switchMap(phone => {
          return this.usersGQL.fetch({
            phoneContains: phone
          });
        }),
      )
      .subscribe(
        (users) => {
          this.selectedUserError = null;
          this.filteredUsers = users.data.busUsers.edges;
        });
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.signupForm.controls;
  }

  submit(): any {
    const user = this.signupForm.value;
    if (user.phone.slice(0, 1) === '0') {
      user.phone = '+251' + user.phone.slice(1);
    }
    this.createUserMutation.mutate({
      input: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        password: user.password,
      }
    }).pipe(
      tap(({data}) => (data.user !== null) ?
        this.storage.setToken(data.user.token, data.user.refreshToken) : throwError('Some error occured'))
    ).subscribe(
      (response) => {
        this.signup.emit(true);
      }
    );
  }

  finish(): any {
    this.signup.emit();
  }

  referredBy($event: MatAutocompleteSelectedEvent): any {
    this.selectedUser = $event.option.value;
    this.signupForm.controls['referredBy'].setValue(this.selectedUser.name);
  }

  referredByFocusOut($event: any): any {
    let phone = this.signupForm.value.referredBy;
    if (phone.slice(0, 1) === '0') {
      phone = '+251' + phone.slice(1);
    }
    // this.userService.searchUsers(phone).subscribe(
    //   (users) => {
    //     if (users.length === 1){
    //       this.selectedUser = users[0].node;
    //       this.signupForm.controls['referredBy'].setValue(this.selectedUser.name);
    //     }else{
    //       this.selectedUserError = 'User dose not exist';
    //     }
    //   }
    // );
  }
}
