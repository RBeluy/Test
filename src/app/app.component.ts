import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.initTranslate();
  }
  initTranslate(): void {
    const lang = localStorage.lang = localStorage.lang ? localStorage.lang : 'en';
    this.translate.use(lang);
    this.translate.onLangChange.subscribe(event => localStorage.lang = event.lang);
  }
}
