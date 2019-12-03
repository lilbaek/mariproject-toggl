import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppConfig} from './environments/environment';
import {AppModule} from './app/app.module';

if (AppConfig.production) {
    enableProdMode();
}
platformBrowserDynamic()
    .bootstrapModule(AppModule, {
        preserveWhitespaces: false
    })
    .catch(err => console.error(err));
