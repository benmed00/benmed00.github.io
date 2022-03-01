import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { NgxAnimatedCounterModule } from '@bugsplat/ngx-animated-counter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxToggleModule } from 'ngx-toggle';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxToggleModule } from 'projects/ngx-toggle/src/lib/ngx-toggle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxAnimatedCounterModule,
    NgxToggleModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
