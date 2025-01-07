import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { InMemoryDataService, provideInMemoryDataService } from './shared/services/in-memory-data.service';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    // provideInMemoryDataService({ dataEncapsulation: false }),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService))
  ]
};
