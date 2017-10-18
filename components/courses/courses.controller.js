(function () {
  angular
      .module('app.courses')
      .controller('coursesController', coursesController);

  coursesController.$inject = ['$state', 'CoursesService', 'modal', '$rootScope'];

  function coursesController ($state, CoursesService, modal, $rootScope) {
    var vm = this;

    vm.$onInit = function () {
      vm.courses = CoursesService.query();
    };

//redirect
    vm.edit = function (item) {
      $state.go('editcourse', {id: item.id});
    };

//remove current course
    vm.remove = function (item) {
      modal.open(item);
    };

// update courses' list
    $rootScope.$on('updateCourses', function() {
      vm.$onInit();
    });
  }
})();