import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'preguntasfrecuentes',
    loadChildren: () => import('./preguntasfrecuentes/preguntasfrecuentes.module').then( m => m.PreguntasfrecuentesPageModule)
  },
  {
    path: 'autoevaluacion',
    loadChildren: () => import('./autoevaluacion/autoevaluacion.module').then( m => m.AutoevaluacionPageModule)
  },
  {
    path: 'lineasdeemergencia',
    loadChildren: () => import('./lineasdeemergencia/lineasdeemergencia.module').then( m => m.LineasdeemergenciaPageModule)
  },
  {
    path: 'mitosyrealidades',
    loadChildren: () => import('./mitosyrealidades/mitosyrealidades.module').then( m => m.MitosyrealidadesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
