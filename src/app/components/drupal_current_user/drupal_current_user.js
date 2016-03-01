    (function() {
    'use strict';
// .constant('user_nit', Drupal.settings.instrumentos_gie.profile.beneficiarios.field_nit.und[0].value) //logged drupal user
    //.constant('drupal_user', Drupal.settings.instrumentos_gie.profile); //logged drupal user
    angular
        .module('InnovationManagement')
        .factory('drupal_current_user', auth);

    /** @ngInject */
    function auth($http, $log, $cookies, Restangular) {
        var apiLogIn = 'https://giepiloto.herokuapp.com/session/signin';
        var apiSingUp = 'https://giepiloto.herokuapp.com/users/signup';
        var user = {};
        var token = null;


        var service = {
            login: login,
            singup: singup,
            logout: logout,
            isLogged: isLogged,
            getUser: getUser,
            getUserByToken:getUserByToken,
            resetPassRequest: resetPassRequest,
            resetPass: resetPass
        };

        return service;

        function getUser() {
            if(typeof(Drupal)!='undefined'){ 
                return Drupal.settings.instrumentos_gie.profile.beneficiarios.field_nit.und[0].value;
            }
            return false;
        }
           
        function getUserByToken(token) {
            return Restangular.all('users').customGET("user_id",{token:token});
        }
        function resetPass(data) {
            return Restangular.all('password/update').post({reset:data})
           
        }
        function resetPassRequest(email) {

            return  Restangular.all('password/reset').post({reset:{"email":email}});
        }

        function singup(data) {

            return $http.post(apiSingUp, data).
            then(getAnswersComplete, getAnswersFailed);

            function getAnswersComplete(response) {
                if (response.status == 200) {
                    if (response.data.user.auth_token != null) {
                        $cookies.put('user_id', response.data.user.id);
                        $cookies.put('token', response.data.user.auth_token);
                        $cookies.put('email', response.data.user.email);
                        return $cookies.get('user_id');
                    } else {
                        return null;
                    }

                } else {
                    return null;
                }
            }

            function getAnswersFailed(error) {
                $log.error('XHR Failed for getAnswers.\n' + angular.toJson(error.data, true));
                return null;
            }
        }
        
        function login(data) {


            return $http.post(apiLogIn, data)
                .then(getAnswersComplete, getAnswersFailed);


            function getAnswersComplete(response) {
                if (response.status == 200) {
                    if (response.data.user.auth_token != null) {
                        $log.debug('logged as', response.data);

                        $cookies.put('user_id', response.data.user.id);
                        $cookies.put('token', response.data.user.auth_token);
                        $cookies.put('email', response.data.user.email);
                        $log.debug('cokies as', $cookies);
                        return $cookies.get('user_id');
                    } else {
                        return null;
                    }

                } else {
                    return null;
                }
            }


            function getAnswersFailed(error) {
                $log.error('XHR Failed for getAnswers.\n' + angular.toJson(error.data, true));
                return null;
            }
        }

        function login(data) {


            return $http.post(apiLogIn, data)
                .then(getAnswersComplete, getAnswersFailed);


            function getAnswersComplete(response) {
                if (response.status == 200) {
                    if (response.data.user.auth_token != null) {
                        $log.debug('logged as', response.data);

                        $cookies.put('user_id' , response.data.user.id);
                        $cookies.put('token' , response.data.user.auth_token);
                        $cookies.put('email' , response.data.user.email);
                        $log.debug('cokies as', $cookies);
                        return $cookies.get("user_id");
                    } else {
                        return null;
                    }

                } else {
                    return null;
                }
            }


            function getAnswersFailed(error) {
                $log.error('XHR Failed for getAnswers.\n' + angular.toJson(error.data, true));
                return null;
            }
        }


        function logout(data) {
            //$log.debug("entro a logo con la info: ", data);
            //var data = {characterization:{user_id:5}}
            delete $cookies.remove("user_id");
            delete $cookies.remove("token");
            delete $cookies.remove("email");

            //reload
            // $state.go('login', {}, { reload: true });
        }


        function isLogged() {
          //  $log.debug('entro a islogged', $cookies);
            if(typeof(Drupal)!='undefined'){ 
            if (Drupal.settings.instrumentos_gie.profile.beneficiarios.field_nit.und[0].value) {
                return true;
            } else {
                return false;
            }
        }
        return false;

        }


    }
})();
