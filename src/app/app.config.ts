import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routes } from './app.routes';
import { groceryReducer } from './store/reducer/grocery.reducer';
import { bucketReducer } from './store/reducer/bucket.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideStore({
    groceries: groceryReducer,
    bucket: bucketReducer
  }),
  provideEffects(),
  provideStoreDevtools({})
  ]
};
