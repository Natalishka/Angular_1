(function() {
  angular
    .module('filters', [])
    .filter('courseDuration', courseDuration);


  function courseDuration() {
    return function (value) {
      var hoursFraction = value/60;
      var hours = Math.floor(hoursFraction);
      var minutes = value % 60;

      if(!value) {return ""}
      return hours + ' ч. ' +  minutes + ' мин.';
    };
  }
})();