import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UsersGQL} from '../../../../generated/graphql';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {echo} from '../../../../util/print';
import {StorageService} from '../../../../core/service/storage.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-user-search-form',
  templateUrl: './user-search-form.component.html',
  styleUrls: ['./user-search-form.component.scss']
})
export class UserSearchFormComponent implements OnInit {
  @Output() userSelected: EventEmitter<any> = new EventEmitter<any>();
  searchInputControl = new FormControl();
  allUsers = [];
  filteredUsers: Observable<any>;

  constructor(private usersGQL: UsersGQL, translate: TranslateService , private storage: StorageService) {
    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    this.filteredUsers = this.searchInputControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => {
        if (value !== '') {
          return this._filter(value);
        } else {
          return of(null);
        }
      })
    );
  }

  private _filter(value: string): any{
    return this.usersGQL.watch({
      phoneContains: value,
      phone: null
    }).valueChanges.pipe(map((response) => response.data.busUsers.edges));
  }

  selected($event): void {
    this.userSelected.emit($event.option.value.node);
  }
  displayFn(user): string {
    return user &&  user.firstName && user.lastName  ? user.firstName + ' ' + user.lastName : '';
  }

}
