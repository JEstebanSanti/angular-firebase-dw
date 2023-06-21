import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotosComponent } from './pages/motos/motos.component';

const routes: Routes = [
  {path: 'motos', component:MotosComponent},
  {path: '**', redirectTo: 'motos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
