import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { VerbsService } from './services/verbs.service';
import { FinalDialogService } from './services/finalDialog.service'
import { VerbRowComponent } from './components/verb-row/verb-row.component';
import { FinalDialogComponent } from './components/final-dialog/final-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    VerbRowComponent,
    FinalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [VerbsService, FinalDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
