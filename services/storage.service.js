(function() {
  angular
    .module('app')
    .factory('StorageService', StorageService);

  function StorageService() {

    var service = {
      setData: setData,
      getData: getData,
      removeData: removeData
    };

    return service;


    function setData (key, value) {
      localStorage.setItem(key, value);
    }

    function getData(key) {
      return localStorage.getItem(key);
    }

    function removeData(key) {
      localStorage.removeItem(key);
    }
  }
})();
