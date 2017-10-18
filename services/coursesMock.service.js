(function() {

  angular
    .module('app')
    .factory('CoursesMockService', CoursesMockService);

  function CoursesMockService($httpBackend) {

    function setCourses() {
      //get all courses
      $httpBackend.whenGET('/courses').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //get particular course by id
      $httpBackend.whenGET(/courses\/\w+$/).respond(function(method, url, data) {
        var id = getId(url);
        var course = getById(id);
        return [200, course, {}];
      });

      //update course
      $httpBackend.whenPUT(/courses\/\w+$/).respond(function(method, url, data) {
        var id = getId(url);
        for (var i = 0; i < courses.length; i++) {
          if(courses[i].id === id) {
            courses[i] = JSON.parse(data);
          }
        }
        return data;
      });

      //create course
      $httpBackend.whenPOST('/courses').respond(function(method, url, data) {
        var newCourse = JSON.parse(data);
        newCourse.id = +new Date;
        courses.push(newCourse);
        return [200, newCourse, {}];
      });

      //delete course
      $httpBackend.whenDELETE(/courses\/\d*/).respond(function(method, url, data) {
        var id = getId(url);
        for (var i = 0; i < courses.length; i++) {
          if(courses[i].id === id) {
            courses.splice(i, 1);
          }
        }
        var res = {success: true};
        return [200, res, {}];
      });
    }

    return {
      setCourses: setCourses
    }
  }


  var courses = [
    { 'title': 'Видеокурс1',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': 120,
      'id': 1
    },
    { 'title': 'Видеокурс2',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': 90,
      'id': 2
    },
    { 'title': 'Видеокурс3',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': 75,
      'id': 3
    }
  ];

// private methods
  function getById(id) {
    for (var i = 0; i < courses.length; i++) {
      if(courses[i].id === id) {
        return courses[i];
      }
    }
  }

  function getId(url) {
    var reg = /.*\/courses\/(\w+)/;
    return parseInt(url.replace(reg, '$1'), 10);
  }

})();