import {Component, OnInit, Input, Inject} from '@angular/core';
import {echo} from '../../../util/print';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from '../../../core/service/storage.service';

@Component({
  selector: 'app-passenger-info-preview',
  templateUrl: './passenger-info-preview.component.html',
  styleUrls: ['./passenger-info-preview.component.scss']
})
export class PassengerInfoPreviewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    translate: TranslateService,
    private storage: StorageService,
    public matDialogRef: MatDialogRef<any>) {

    translate.use(this.storage.getLanguage('lang'));
  }

  ngOnInit(): void {
    echo(this.data);
  }

}
