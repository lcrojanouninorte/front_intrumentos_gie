(function() {
    'use strict';

    angular
        .module('InnovationManagement')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $anchorScroll, $rootScope, $location, $cookies, auth, $state) {


        $anchorScroll.yOffset = 50;
        $log.debug('run Block end');
        $log.debug('cookies en run', $cookies);
        //Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
/*
            var isLogin = toState.name === "login";
            if (isLogin) {
                return; // no need to redirect 
            }
            $log.debug('to states', toState);

            if (!auth.isLogged() && toState.authenticate) {
                $log.debug('to states', toState);
                $log.debug('cookies', $cookies);
                $log.debug('not logdded');
                event.preventDefault(); // stop current execution
                $state.go('login', {}, {
                    reload: true
                });
            } else {
                // $state.go( toState.name); 

            }*/

        });
    }


})();
