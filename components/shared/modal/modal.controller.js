(function() {
  angular
    .module('modal')
    .controller('modalController', modalController);

  modalController.$inject = ['course', '$modalInstance', 'CoursesService', '$rootScope'];

  function modalController(course, $modalInstance, CoursesService, $rootScope) {
    var vm = this;

    vm.title = course.title;

    vm.ok = function() {
      CoursesService.remove({id: course.id});
      $rootScope.$emit('updateCourses');
      $modalInstance.close();
    };

    vm.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  }
})();

