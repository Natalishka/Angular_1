(function() {
  angular
      .module('app.editcourse')
      .controller('editController', editController);

  editController.$inject = ['$state', 'CoursesService'];


  function editController ($state, CoursesService) {
    var vm = this;

    CoursesService.get({id: $state.params.id}).$promise.then(function(data) {
      vm.course = data;
    });

    vm.saveCourse = function (course) {
      !!course.id ? update(course) : create(course);
    };

//private methods
    function update(course) {
      CoursesService.update({id: vm.course.id}, course);
    }

    function create(course) {
      CoursesService.save(course).$promise.then(function(data) {
        console.log(data);
      })
    }
  }
})();