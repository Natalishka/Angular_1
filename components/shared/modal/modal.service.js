angular
  .module('modal', ['ngAnimate', 'ui.bootstrap'])
  .factory('modal', ModalWindow);

  function ModalWindow($uibModal) {

    var service = {
      open: open
    };

    return service;


    function open(item) {
      $uibModal.open({
        animation: true,
        templateUrl: './components/shared/modal/modal.tmpl.html',
        controller: 'modalController',
        controllerAs: 'modal',
        resolve: {
          course: function() {
            return item;
          }
        }
      });
    }
  }


