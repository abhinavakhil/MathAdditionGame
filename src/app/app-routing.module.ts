import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MathComponent } from './math/math.component';

const routes: Routes = [
  {path:'',component:MathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
