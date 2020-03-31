import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MitosyrealidadesPageRoutingModule } from './mitosyrealidades-routing.module';

import { MitosyrealidadesPage } from './mitosyrealidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MitosyrealidadesPageRoutingModule
  ],
  declarations: [MitosyrealidadesPage]
})
export class MitosyrealidadesPageModule {}
