angular
  .module('app.courses', ['modal', 'filters'])
  .component('courses', {
    templateUrl: 'components/courses/courses.view.html',
    controller: 'coursesController',
    controllerAs: 'courses'
  });