/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('InnovationManagement')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
   // .constant('user_nit', Drupal.settings.instrumentos_gie.profile.beneficiarios.field_nit.und[0].value) //logged drupal user
    //.constant('drupal_user', Drupal.settings.instrumentos_gie.profile); //logged drupal user

})();
