import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideAppInitializer} from '@angular/core';
import { provideRouter } from '@angular/router';
import { inject } from '@angular/core';
import { InitService } from './services/init.service'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      inject(InitService).registerIcons();
    })
  ]
};
