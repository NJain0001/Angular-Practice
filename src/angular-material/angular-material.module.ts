import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule
       ,MatCheckboxModule
       ,MatMenuModule
       ,MatToolbarModule
       ,MatIconModule
       ,MatCardModule
       ,MatSidenavModule
       ,MatGridListModule
       ,MatListModule} from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    MatButtonModule
   ,MatCheckboxModule
   ,MatMenuModule
   ,MatToolbarModule
   ,MatIconModule
   ,MatCardModule
   ,MatSidenavModule
   ,MatGridListModule
   ,MatListModule],
  exports: [
    MatButtonModule
   ,MatCheckboxModule
   ,MatMenuModule
   ,MatToolbarModule
   ,MatIconModule
   ,MatCardModule
   ,MatSidenavModule
   ,MatGridListModule
   ,MatListModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
