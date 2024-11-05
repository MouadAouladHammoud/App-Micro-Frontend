import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "page", loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule) },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forChild(routes)], // Ici, il faut utiliser "forChild()" à la place de "forRoot()" car le module concerné "app.module.ts" est appelé et utilisé dans "host-app", qui utilise "forRoot()".
  exports: [RouterModule]
})
export class AppRoutingModule { }
