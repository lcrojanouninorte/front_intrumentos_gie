(function() {
    'use strict';

    angular
        .module('InnovationManagement')
        .controller('InstrumentsController', InstrumentsController);

     /** @ngInject */
    function InstrumentsController($cookies, $log, drupal, $scope) {
      var vm = this;
      $log.debug('cookies en instrument', $cookies);
       $scope.profile = drupal_user;
       if($scope.profile==null){
        alert("no hay perfil beneficiarios");
       }


       $scope.prueba = function() {
      

       
         drupal.node_load(10).then(function(node) {
            alert(node.title);
          });
        drupal.token().then(function(token) {
          console.log('Got the token: ' + token);
        });
         drupal.connect().then(function(data) {
          if (data.user.uid) { alert('Hello ' + data.user.name + '!'); }
          else { alert('Please login.');  }
        });
       }


    }
})();
