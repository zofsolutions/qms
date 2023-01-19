import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/dashboard/body/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { PrintComponent } from './components/samples/print/print.component';
import { NgxPrintModule } from 'ngx-print';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { TokenService } from './services/token.service';
import { DisplayComponent } from './components/display/display.component';
import { TokenComponent } from './components/token/token.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PrintComponent,
    DisplayComponent,
    TokenComponent
  ],
  imports: [
    NgxPrintModule,
    BrowserModule,
    CarouselModule,
    CountdownModule, 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
