import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Uygulama ilk açıldığında dışarıdan kullanılan paketleri tanıttığımız yer.
// bütün uygulamayı ilgilendiren paketler burada tanımlanır
// Startup dosyası
bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // her tarayıcı desteklesin diye
    provideRouter(routes), // routelar için gerekli
    provideAnimationsAsync(), // animasyonlar çalışsın diye
    provideHttpClient(), // api servisleri için gerekli:
  ],
}).catch((err) => console.error(err));
