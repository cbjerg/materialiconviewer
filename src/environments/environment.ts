// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBC7C1Y_pkxot-8FRNEerpbt3qJungauag',
    authDomain: 'theirishhousedk.firebaseapp.com',
    databaseURL: 'https://theirishhousedk.firebaseio.com',
    projectId: 'theirishhousedk',
    storageBucket: 'theirishhousedk.appspot.com',
    messagingSenderId: '396291847524',
    appId: '1:396291847524:web:8b73f21b6b9271b7'
  },
  sportDbUrl: 'https://www.thesportsdb.com/api/v1/json/1/'
};
