(function() {
  'use strict';

  angular
    .module('InnovationManagement')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider, toastr,  $locationProvider,$validationProvider, RestangularProvider) {
      RestangularProvider.setBaseUrl('https://giepiloto.herokuapp.com/');
   // RestangularProvider.setBaseUrl('https://surveyapi.herokuapp.com/');
    //RestangularProvider.setBaseUrl('http://localhost:3002/');
    RestangularProvider.setFullResponse(true);
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
   // window.sr = new scrollReveal();

    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }
// The angular-drupal configuration settings for my simple app.
angular.module('angular-drupal').config(congig_drupal);

function congig_drupal($provide) {

  $provide.value('drupalSettings', {
    sitePath: 'http://giecaribe-local.com/giecaribe_portal/',
    endpoint: 'api'
  });

}

})();
