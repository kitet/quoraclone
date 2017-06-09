/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'quoraclone',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase:{
       apiKey: "AIzaSyC7Vcp4EZgnoSe_ehaUV5JrvWF2-A7hwPY",
        authDomain: "quoraclone-5fe17.firebaseapp.com",
        databaseURL: "https://quoraclone-5fe17.firebaseio.com",
        projectId: "quoraclone-5fe17",
        storageBucket: "quoraclone-5fe17.appspot.com",
        messagingSenderId: "885123886726"
    },
    torii: { sessionServiceName: 'session' },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
