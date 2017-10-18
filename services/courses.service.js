(function() {
  angular
    .module('app')
    .factory('CoursesService', function ($resource) {
      return $resource('/courses/:id', {id:'@id'}, {
        update: {method: 'PUT'}
      });
    });
})();
