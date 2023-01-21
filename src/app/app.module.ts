import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { VerbsService } from './services/verbs.service';
import { VerbRowComponent } from './components/verb-row/verb-row.component';

@NgModule({
  declarations: [
    AppComponent,
    VerbRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [VerbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
