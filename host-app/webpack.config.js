const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// Configuration pour Module Federation
module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:3000/remoteEntry.js",

    // Déclare le micro-frontend "mfe1" avec son URL d'accès distant, pour qu'il soit utilisable dans l'application "host-app"
    // La syntaxe "mfe1@" permet de référencer ce micro-frontend avec le nom "mfe1"
    "mfe1" : "mfe1@http://localhost:4001/remoteEntry.js",

    // Déclare le micro-frontend "mfe2" avec son URL d'accès distant, pour qu'il soit utilisable dans l'application "host-app"
    // La syntaxe "mfe2@" permet de référencer ce micro-frontend avec le nom "mfe2"
    "mfe2" : "mfe2@http://localhost:4002/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
