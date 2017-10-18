(function() {
  angular
    .module('app')
    .factory('UserService', UserService);

  UserService.$inject = ['$httpBackend'];
  var users = [{name: 'test', pass: 'test'}, {name: 'nataly', pass: 'test'}];

  function UserService($httpBackend) {

    $httpBackend.whenGET(/^components/).passThrough();
    $httpBackend.whenGET(/tmpl/).passThrough();

    function setUsers() {
        $httpBackend.whenPOST('/users').respond(function(method, url, data) {
        var user = JSON.parse(data);
        var check = checkCreds(user.login, user.password);
        var res = {success: check, username: user.login};
        return [200, res, {}];
      });
    }

    function checkCreds (login, pass) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].name === login && users[i].pass === pass) {
          return true;
        }
      }
    }

    return {
      setUsers: setUsers
    };
  }

})();
