import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MitosyrealidadesPage } from './mitosyrealidades.page';

const routes: Routes = [
  {
    path: '',
    component: MitosyrealidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitosyrealidadesPageRoutingModule {}
