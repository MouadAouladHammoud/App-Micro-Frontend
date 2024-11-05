import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cp1Component } from './cp1/cp1.component';
import { Cp2Component } from './cp2/cp2.component';

const routes: Routes = [
  { path: "cp1", component: Cp1Component},
  { path: "cp2", component: Cp2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
