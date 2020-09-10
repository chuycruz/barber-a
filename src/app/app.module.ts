/* Modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

/* Servicios */
import { TranslateService } from './services/translate.service';

/* Componentes */
import { AppComponent } from './app.component';

/* Pipes */
import { TranslatePipe } from './pipes/translate.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';

/* Funcion para servicio de traduccion */
export function translateFactory (provider: TranslateService){
  return () => provider.getData()
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    AddBookingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
