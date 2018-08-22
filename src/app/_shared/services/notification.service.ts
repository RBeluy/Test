import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import {MatSnackBarConfig} from '@angular/material/snack-bar/typings/snack-bar-config';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public config: MatSnackBarConfig;
  constructor(private snackBar: MatSnackBar, private translate: TranslateService) {

  }

  private open(message, action, snackBarClass: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: snackBarClass
    });
  }

  success(message: string) {
    this.translate.get(message).subscribe(res => {
      this.open(res, 'SUCCESS', 'g-success');
    });
  }

  error(message: string) {
    this.translate.get(message).subscribe(res => {
      this.open(res, 'ERROR', 'g-error');
    });
  }

  warning(message: string) {
    this.translate.get(message).subscribe(res => {
      this.open(res, 'WARNING', 'g-warning');
    });
  }

}
