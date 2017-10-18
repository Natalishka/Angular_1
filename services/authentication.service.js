(function() {

  angular
    .module('app')
    .factory('AuthenticationService', AuthenticationService);

  function AuthenticationService(StorageService) {
    function setUsername (key, value) {
      StorageService.setData(key, value);
    }

    function getUsername(key) {
      return StorageService.getData(key);
    }

    function removeUsername(key) {
      StorageService.removeData(key);
    }


    return {
      setUsername: setUsername,
      getUsername: getUsername,
      removeUsername: removeUsername
    }
  }
})();
