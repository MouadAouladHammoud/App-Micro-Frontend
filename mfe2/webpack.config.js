const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2',

  exposes: {
    // Pour vérifier que ce composant et ce module sont exposés, consultez le lien généré par défaut : http://localhost:4002/remoteEntry.js et recherchez "./Component" et "./OrderModule" dans la variable "moduleMap".
    './Component': './src/app/app.component.ts', // Expose le composant principal pour qu'il soit utilisé dans "host-app".
    './AppModulee': "./src/app/app.module.ts", // Expose le module principal pour qu'il soit utilisé dans "host-app"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
