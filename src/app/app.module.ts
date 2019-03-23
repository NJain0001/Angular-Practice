import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AutoRefreshComponent } from './auto-refresh/auto-refresh.component';
import { WorkspaceDashComponent } from './workspace-dash/workspace-dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    AutoRefreshComponent,
    WorkspaceDashComponent
  ],
  imports: [
    BrowserModule
   ,BrowserAnimationsModule
   ,AngularMaterialModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
