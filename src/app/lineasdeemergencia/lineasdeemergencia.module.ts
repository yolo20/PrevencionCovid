import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineasdeemergenciaPageRoutingModule } from './lineasdeemergencia-routing.module';

import { LineasdeemergenciaPage } from './lineasdeemergencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineasdeemergenciaPageRoutingModule
  ],
  declarations: [LineasdeemergenciaPage]
})
export class LineasdeemergenciaPageModule {}
