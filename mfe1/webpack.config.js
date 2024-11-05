const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    // './Component': './src/app/app.component.ts',
    
    // Pour vérifier que ce module est exposé, consulter le lien généré par défaut : http://localhost:4001/remoteEntry.js et recherchez "./OrderModule" dans la variable "moduleMap".
    './OrderModule': "./src/app/order/order.module.ts", // Expose le module "OrderModule" pour qu'il soit utilisé dans "host-app"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
