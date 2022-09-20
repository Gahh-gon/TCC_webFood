import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { KichenPageComponent } from './components/kichen-page/kichen-page.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent},

  {
    path: 'receitas',
    loadChildren: () => import('./components/kichen-page/route/kichen-page.module').then((m) => m.KichenPageModule)
  }

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
