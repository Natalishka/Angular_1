(function () {
  angular
    .module('header')
    .controller('headerController', headerController);

    headerController.$inject = ['$state', 'AuthenticationService'];


    function headerController($state, AuthenticationService) {
      var vm = this;

      vm.logoff = function() {
        AuthenticationService.removeUsername('currentUser');
        $state.go('login');
      };

      vm.helloUser = function(key) {
        return AuthenticationService.getUsername(key);
      };
    }
})();