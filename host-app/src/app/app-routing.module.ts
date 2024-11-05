import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "mfe1", loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4001/remoteEntry.js",
        exposedModule: "./OrderModule" // Récupère le module "OrderModule" de l'application "mfe1", car c'est ce module qui est exposé dans le projet "mfe1" (voir le fichier "mfe1/webpack.config.js")
      }).then(m => m.OrderModule).catch(err => console.log(err));
    }
  },
  { path: "mfe2", 
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4002/remoteEntry.js",
        exposedModule: "./AppModulee" // Récupère le module principal "AppModule" de l'application "mfe2", car c'est ce module qui est exposé dans le projet "mfe2" (voir le fichier "mfe2/webpack.config.js")
      }).then(m => m.AppModule).catch(err => console.log(err)); 
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
