import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'preguntasfrecuentes',
    loadChildren: () => import('./preguntasfrecuentes/preguntasfrecuentes.module').then( m => m.PreguntasfrecuentesPageModule)
  },
  {
    path: 'lineasdeemergencia',
    loadChildren: () => import('./lineasdeemergencia/lineasdeemergencia.module').then( m => m.LineasdeemergenciaPageModule)
  },
  {
    path: 'mitosyrealidades',
    loadChildren: () => import('./mitosyrealidades/mitosyrealidades.module').then( m => m.MitosyrealidadesPageModule)
  },
  {
    path: 'home', 
    loadChildren: () => import('./public/home/home.module').then( m => m.HomePageModule)
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
