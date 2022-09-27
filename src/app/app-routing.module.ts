import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';


const routes: Routes = [
  {path: '', component: HomeScreenComponent},

  {
    path: 'receitas',
    loadChildren: () => import('./components/kichen-page/route/kichen-page.module').then((m) => m.KichenPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./components/formulario-ini/route/formulario-ini-routing.module').then((m) => m.FormularioIniRoutingModule)
  }

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
