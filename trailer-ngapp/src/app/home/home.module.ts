import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { indexReducer } from './index/index.reducer';
import { IndexEffects } from './index/index.effects';
import { IndexService } from './index/index.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', {
      result: indexReducer
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([IndexEffects])
  ],
  declarations: [
    HomeComponent,
    IndexComponent    
  ],
  providers: [IndexService]
})
export class HomeModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/home/`,
    '.json'
  );
}