import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Ng2STCssConfiguration } from 'ng2-simple-table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private translate: TranslateService, css: Ng2STCssConfiguration) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');


        css.setTable('table table-bordered table-condensed table-striped');
    }
}
