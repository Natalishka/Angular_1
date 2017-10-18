angular
  .module('app.editcourse', ['filters'])
  .component('editcourse', {
    templateUrl: 'components/editcourse/editcourse.view.html',
    controller: 'editController',
    controllerAs: 'edit'
  });