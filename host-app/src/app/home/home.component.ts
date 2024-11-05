import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild("placeholder", {read: ViewContainerRef})
  viewContainer!: ViewContainerRef;

  // Charger le composant pricipal depuis le micro-frontend "mfe2". dans le fichier mfe2\webpack.config.js => exposes: { './Component': './src/app/app.component.ts', ... }
  // NB: Les routes de ce composant ne fonctionnent pas dans "host-app" ; il est nécessaire d'appeler le module pour activer ses routes.
  async loadRemoteComponent(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: "http://localhost:4002/remoteEntry.js",
      exposedModule: "./Component"
    });

    this.viewContainer.createComponent(m.AppComponent);
  }

}
