import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { KichenPageComponent } from './components/kichen-page/kichen-page.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'kichen', component: KichenPageComponent}

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
