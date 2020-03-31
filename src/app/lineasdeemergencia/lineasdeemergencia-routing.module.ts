import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineasdeemergenciaPage } from './lineasdeemergencia.page';

const routes: Routes = [
  {
    path: '',
    component: LineasdeemergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineasdeemergenciaPageRoutingModule {}
