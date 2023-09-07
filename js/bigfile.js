/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular
  .module('todomvc', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'TodoCtrl',
      templateUrl: 'todomvc-index.html',
      resolve: {
        store: function (todoStorage) {
          // Get the correct module (API or localStorage).
          return todoStorage.then(function (module) {
            module.get(); // Fetch the todo records in the background.
            return module;
          });
        },
      },
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status43786.9522', routeConfig)
      .otherwise({
        redirectTo: '/',
      });
  });

/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular
  .module('todomvc', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status12970.6416', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status10', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status11', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status12', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status13', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status14', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status15', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status16', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status17', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status18', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status19', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status20', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status21', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status22', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status23', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status24', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status25', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status26', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status27', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status28', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status29', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status30', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status31', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status32', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status33', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status35919.6118', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status14449.9084', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status11175.8362', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status77590.5243', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status340.9564', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status66010.9425', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status67446.9733', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status95583.3276', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status71995.3083', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status43598.6065', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status66432.0766', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status33791.8759', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status56082.3882', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status19968.3023', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status84690.2375', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status44043.8865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status25021.1215', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status41848.8429', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status41446.8312', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status21372.3919', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6760.2686', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status95988.2291', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status78428.8024', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status64846.6334', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status11199.6735', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status83415.653', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status51237.2866', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status41728.5276', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status61402.9428', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status41381.78', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status11683.0913', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status52869.917', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status67392.9437', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3132.6829', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status87290.7134', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status94354.7156', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status75136.4761', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status75318.7268', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status61889.0247', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status82924.4227', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status52864.7533', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status61702.5436', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3310.4046', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8581.3395', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status14.2886', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9478.8831', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5078.925', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status940.725', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status892.7662', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9583.0704', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2106.109', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6595.814', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status385.007', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status417.893', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1844.7552', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7902.1054', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6054.4799', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status63.428', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2447.6994', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9989.8817', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5682.958', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status670.3804', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2038.7601', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1642.0031', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1591.6542', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status311.1116', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5282.5728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2704.6438', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9084.0837', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7695.9414', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6775.8906', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8479.6463', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6010.9196', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7428.7243', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1551.0846', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status272.2935', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2236.6359', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6352.5496', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3216.5905', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5094.5902', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status172.6264', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3803.3068', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8942.4724', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status824.8889', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7565.9155', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7053.5163', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8901.3923', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3604.0763', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4886.088', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1521.8644', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6973.7153', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5579.8339', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7785.2976', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6675.4808', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2223.1221', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5119.8366', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9227.0779', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2275.495', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status32.8526', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3063.1821', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7738.7301', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9111.0662', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9117.5408', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8588.6314', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4991.9228', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status206.8428', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status44.3985', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7626.5474', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3985.7571', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status744.2634', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8059.4143', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3468.1828', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9322.5071', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9630.189', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4557.1979', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7885.7237', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4706.2961', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status147.6781', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4467.6683', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4033.0904', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1878.4273', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3715.7563', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5868.8095', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5712.666', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4013.7631', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9076.2862', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7836.8362', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7241.8909', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9574.3821', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7156.4317', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9268.8059', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1589.2746', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5207.7788', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4804.7458', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3117.573', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status785.502', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2396.3151', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status562.5437', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3415.7707', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6849.2679', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2651.0303', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6049.9518', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8325.1404', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status28.3735', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6245.5144', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4841.5867', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6914.3362', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3904.6854', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9123.7778', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9281.7623', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5418.3575', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7803.3182', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4155.3245', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8040.6817', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status385.6167', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5247.8389', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9117.4504', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6740.825', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6540.5094', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3294.3292', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1349.8393', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3602.9972', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status427.6865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1870.2406', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9364.0728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7561.443', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7128.5831', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8663.576', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2319.0067', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9818.0272', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6557.3394', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2053.4713', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3938.0581', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2758.5927', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6397.7247', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status283.9973', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status482.6639', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5380.7156', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9009.5166', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1313.5136', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7351.5957', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1120.0427', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1861.6275', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4728.7815', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3488.8041', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4484.9701', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status686.1326', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1723.5227', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8357.3109', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4574.0543', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8803.0244', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5413.3221', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8766.5672', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3725.8869', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9514.4752', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status626.6603', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7374.5101', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5415.8237', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9859.39', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4628.4821', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8962.8739', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8663.821', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2694.7437', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4859.1837', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6318.4148', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7150.3724', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6107.9128', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8444.6421', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5936.4824', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3434.8027', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status534.2315', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9523.7245', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9952.914', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8253.9704', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3791.8039', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3840.8187', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status680.0533', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9519.898', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status394.0419', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5804.4401', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7448.3365', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2880.1398', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5758.8244', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4140.7532', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7692.7607', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2875.7664', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1282.8342', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2400.1233', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1732.6404', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2352.6842', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3277.4647', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8664.0604', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4944.4825', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9218.6494', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5622.2957', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5155.9571', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8818.6987', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7164.0188', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9868.8067', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4291.0863', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5801.3434', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9539.0832', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1965.3182', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2150.6544', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7557.8946', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5638.8523', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6273.742', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6510.5616', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8269.3979', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1703.6659', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5367.8941', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9587.9146', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9141.0318', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9892.735', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status454.0695', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3251.4253', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3808.9991', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2.2338', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5569.3678', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8228.5058', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6667.3986', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6910.6851', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9827.2391', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6144.1625', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8640.0829', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5608.6736', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6901.4841', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status98.3475', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3074.122', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3649.3703', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9558.421', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7056.8913', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6406.8184', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8057.2867', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2283.382', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4719.6706', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5483.1446', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9572.337', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4495.3657', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4504.1317', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status424.1588', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status716.6431', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3499.8642', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status757.7859', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8790.2801', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4605.2035', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9421.9771', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8438.1496', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2782.0517', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1365.3713', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4519.3144', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9475.5115', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1337.8136', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7358.7863', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6112.4144', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2009.9528', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2613.0728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7521.9315', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2169.6607', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2525.2392', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status592.2871', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8939.0932', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status676.5562', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7561.3349', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5345.6251', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1597.6636', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6768.1968', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1226.0653', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5220.6626', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1836.7709', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4754.7243', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status343.8979', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4510.8474', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8887.3186', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1442.4999', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status110.0303', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2122.8865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4399.4924', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status221.8531', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7086.4974', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8151.2657', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6444.574', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4030.8684', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2524.8306', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7866.0656', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2722.5873', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6745.0254', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3825.9353', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3289.6149', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4088.0249', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status905.3145', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6089.5463', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4233.8571', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6073.9252', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3029.8129', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3076.0125', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1034.771', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7184.5411', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2558.3343', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2962.6249', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1569.0695', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5783.0213', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1095.4138', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3532.7747', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4556.0166', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9863.326', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status558.9125', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6232.0233', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9765.4451', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status992.5004', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2003.7325', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4179.563', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6014.8677', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9535.7534', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1467.5049', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7564.8323', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5543.1064', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4264.3725', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2112.4524', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6729.1616', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3159.3463', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status271.2742', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3383.4761', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9414.4282', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status38.5023', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5125.8171', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3674.5469', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2393.2411', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3565.7954', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5168.73', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1023.3117', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6310.9551', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6874.1666', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5802.8249', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1604.2879', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status360.6752', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1685.4762', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3515.8666', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4310.7834', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8636.2274', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5096.7505', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5740.3128', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4809.0399', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7617.3376', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7776.7023', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4468.1488', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5039.8433', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5549.2008', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6173.1712', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8699.9774', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5259.7316', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1555.0839', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1761.6325', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1804.458', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3619.2471', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6215.7405', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2440.4148', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1418.3914', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2756.8875', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2316.3909', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5683.7131', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7051.5143', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8368.8539', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6463.5925', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status65.0525', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5198.2116', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6515.1162', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1481.7927', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1919.6168', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7416.8861', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3705.0532', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2063.5759', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4238.4181', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6916.7547', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7060.8161', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1543.7813', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8854.0395', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6627.1567', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9687.9691', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3918.0172', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8474.9894', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3812.5217', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5204.3842', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5839.6105', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4685.7077', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9657.6016', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9330.1296', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3378.0669', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4899.5019', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1950.0319', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3759.229', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9302.7118', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9969.4655', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6303.2654', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status467.4728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6660.8858', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1316.5731', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9410.4141', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status650.6999', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6074.4187', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8018.8384', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2386.4545', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5457.3166', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8846.0814', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7005.1787', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8854.4538', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6205.2154', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8606.3509', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5795.1852', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4025.9947', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2278.0901', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6072.7995', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status360.8589', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6319.6215', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5061.2402', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4309.9175', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7930.7517', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6685.1649', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2936.5377', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7081.7986', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3891.7798', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9315.8277', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5834.076', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status134.9474', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2837.8981', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1946.3252', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2847.9463', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9104.105', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8677.7908', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status821.2436', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3578.1998', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6466.245', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6518.8491', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3508.5017', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1353.7972', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5668.1627', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2726.6123', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5897.7144', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8800.2758', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7311.2817', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6729.7732', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1736.5449', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4049.6593', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8096.5616', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5455.3632', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1742.6796', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3196.8129', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7130.2164', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1967.5548', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5506.5266', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2271.8908', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6031.7195', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6774.9371', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9542.2051', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1546.1525', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3883.5619', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7662.985', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status427.8894', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status279.0997', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5604.9367', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5656.5803', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9604.8058', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4774.5015', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3982.3195', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6039.3213', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2939.6161', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6875.703', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7338.7759', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4649.7114', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9250.451', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9609.4208', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status862.9123', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9150.5442', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6990.4592', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8499.5113', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5588.181', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status356.1923', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4618.9077', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7663.252', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5067.8986', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3315.5269', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1506.5237', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1808.5186', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5444.6932', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5175.0527', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9688.0063', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status616.5523', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3176.5499', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9467.3159', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3919.6871', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4862.6388', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9707.0997', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4972.4732', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9920.2925', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2270.5173', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3812.497', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9694.2853', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9203.1539', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8730.9062', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8079.1891', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7340.9835', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4449.3248', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3001.9112', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9641.6363', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1465.9824', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9034.8066', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6942.9576', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7122.316', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4797.7262', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4206.7941', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4396.068', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8943.9992', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2874.841', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2495.8332', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7873.8371', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1770.2284', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3226.4927', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1670.7715', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5434.194', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6178.2544', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7819.7985', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5310.9679', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9738.1682', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9849.9305', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4781.8715', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1015.3603', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6718.2578', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2762.1198', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1060.3624', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status883.0173', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2273.4432', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1267.7379', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5118.6663', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6158.5836', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1649.6678', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4035.8745', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9517.8562', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5626.0994', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1829.7351', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8155.7042', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4443.3301', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1813.1824', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9648.75', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3201.9818', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1922.5896', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8352.2031', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4362.7172', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status612.2543', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7409.0472', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8776.6538', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4059.6766', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5844.5588', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1877.9424', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6159.8827', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3734.156', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3295.347', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9402.1823', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1735.2438', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3716.6293', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status565.1275', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status269.8764', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4029.1286', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4674.6189', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7621.8504', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8730.0966', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3978.0887', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status739.8713', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3126.6892', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2866.3796', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5483.3095', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8506.4884', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7520.7961', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4117.7303', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6716.3434', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2315.1006', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7766.3591', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6284.7894', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7735.8448', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status752.0629', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6355.0534', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6718.7924', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7446.9574', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7512.0788', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7779.6485', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1410.0484', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3646.4686', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7090.2166', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1884.4063', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1663.08', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2176.9548', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8957.534', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1886.4302', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3970.3962', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1190.6366', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8440.7883', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status414.1216', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2258.4337', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8826.8286', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7893.1636', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5874.9872', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7279.8306', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4181.4467', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4181.293', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6856.4189', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1956.9715', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1527.1457', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8044.5235', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9764.0067', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5262.5236', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8244.3502', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1628.4613', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6573.9897', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5906.0215', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status632.1854', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6066.9262', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6845.2716', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1429.7932', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status148.1348', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4765.4172', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6533.8254', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9439.9618', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1262.0418', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8167.7575', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2459.7629', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5070.4963', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6624.6073', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status384.2174', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4624.5203', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5354.2897', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7034.6251', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3420.2197', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5324.7362', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status349.5937', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8671.5466', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4626.8493', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5536.0028', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8844.1973', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3389.832', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6676.6929', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6053.4521', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4715.4449', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6349.1616', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7365.8056', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5346.2386', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6069.96', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8716.9564', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3299.8413', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1142.6699', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9908.7974', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7486.0298', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1699.8932', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7129.4541', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2889.3509', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5336.925', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status582.1951', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1899.1869', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8280.4254', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2316.1603', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2830.6418', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6923.8596', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5185.4414', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status500.9341', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8328.9969', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5987.2058', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3459.0252', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8476.3751', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7030.0344', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7809.3256', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1668.8071', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8530.8662', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8670.6972', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6907.9765', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5872.3069', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3667.421', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5515.1576', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7076.8281', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6798.7334', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2673.8292', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6687.0239', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9901.6651', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7324.1073', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6386.7327', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5706.385', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7004.3266', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status552.5186', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7540.1157', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8264.4159', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2241.5979', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4972.0156', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9873.8921', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status819.3596', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7714.5247', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8903.556', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6265.2349', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status225.5274', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7757.8137', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7352.8018', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9629.7205', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9025.8818', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1953.4003', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4807.517', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1662.9492', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5389.137', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7936.059', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6651.1034', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1974.4049', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8691.9162', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1549.1524', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5511.5365', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1685.4857', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4849.5837', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status310.6121', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3676.2107', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5647.6635', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6959.9771', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9903.8792', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3979.2318', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6935.3801', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status909.9779', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3787.1328', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7768.2525', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4974.9978', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7393.927', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2208.5938', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8721.1556', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6617.3027', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status659.6802', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3313.8824', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3416.0295', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6559.8233', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5125.6154', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3760.5854', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4166.3865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9432.9228', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7841.0746', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4362.7836', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2463.5624', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6881.3909', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3956.0917', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status464.2903', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3998.0634', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9234.3866', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4195.9483', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8403.1435', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3837.3753', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3972.8087', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9933.3757', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6997.4913', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1419.5149', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2417.5723', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1077.5493', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1219.4414', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3218.6476', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6930.4463', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status875.484', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8059.9211', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4232.9852', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2638.4559', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8305.7524', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2791.3301', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8766.5481', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2996.7366', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status140.1877', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4983.752', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6451.044', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1368.5357', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6860.1359', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5301.3424', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1314.7224', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7285.8787', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status557.6249', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2116.5458', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7248.9855', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8936.4296', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status965.7281', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5719.7109', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7314.3634', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4903.4172', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9315.9447', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3077.2459', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5240.0461', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4364.8021', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4819.1682', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4100.947', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1740.7949', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status195.9135', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2168.1657', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4758.4558', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4341.5939', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4039.3032', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status671.7858', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status513.506', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2287.2981', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status919.8178', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status831.9345', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9893.3335', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8907.2489', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3702.1573', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2399.3641', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4365.8084', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4453.396', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status612.7328', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3618.5392', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3193.6189', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8033.136', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1298.6648', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4516.4053', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6061.2428', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2954.7984', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7840.3213', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7426.6382', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1625.6624', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7184.1659', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9632.5607', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5196.6276', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4295.3616', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7371.3727', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8388.961', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4261.8222', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8040.7949', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9663.709', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status422.6366', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3462.7315', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1577.7373', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2165.3269', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9373.1538', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5956.0311', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status715.618', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5063.7116', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8155.8623', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6498.1813', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2236.6096', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6913.5319', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status697.6435', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7508.5748', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2739.7707', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3939.0199', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9085.3317', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9553.8218', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5874.4941', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2981.0044', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9753.6552', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4904.6527', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1630.5001', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8814.4301', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5761.9305', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6943.6629', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8543.397', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6284.8984', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7620.1459', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7170.8442', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1783.5565', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8180.3881', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4420.2462', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9975.8585', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5479.6445', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3915.2182', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9405.5629', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7297.4733', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2206.7969', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9492.4437', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4888.458', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5961.7566', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7462.8067', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9855.9159', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8719.0094', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5974.3112', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2272.4802', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6923.6942', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4596.5979', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1862.6576', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4027.9622', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2290.5912', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status474.1', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4108.3145', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3788.9436', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2405.1323', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8731.1722', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status511.0403', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5024.8736', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5800.1138', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2605.28', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4525.2664', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6921.2407', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9890.4246', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6640.4388', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3304.4832', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1983.8019', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4917.3995', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2550.3099', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3484.1973', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status315.5808', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5019.8771', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2347.4473', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8765.8014', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4945.0865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4956.3774', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1670.5522', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5450.4679', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9708.6717', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5732.7206', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3914.6693', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6818.9373', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6092.5753', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1453.8966', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9999.3196', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9584.938', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3393.8846', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7537.254', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2221.2589', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3800.5955', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2157.553', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6157.5225', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3230.5435', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4855.7078', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9404.1662', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2097.2548', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3476.129', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8847.0413', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7533.3873', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7777.6329', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2684.7018', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7428.2343', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8590.9937', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6547.8291', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5762.7322', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8629.9076', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3031.4167', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4648.1349', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3872.9424', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4174.3457', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8484.7412', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status261.6232', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1852.5295', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2617.6811', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5467.5187', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2875.6881', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3103.1654', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2340.1789', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4756.8531', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5556.6208', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1843.5732', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status587.7558', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7708.3974', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6329.028', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status980.332', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6302.5382', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9189.3066', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4961.2689', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3555.2548', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2005.6495', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4396.8102', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2219.034', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8714.928', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status133.9525', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1559.2424', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7494.1747', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5532.1912', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7420.7175', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status105.3335', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6175.0697', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9718.9749', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9231.9226', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6410.8321', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3761.3377', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status699.1891', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6294.4767', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4607.3027', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4336.0897', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4841.4346', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4603.2344', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2440.7865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3939.1246', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status17.1488', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5070.5064', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9944.2896', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1516.4494', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2019.8401', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7320.0314', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7450.8608', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9548.8125', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1930.364', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3890.2633', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7465.1458', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9021.1399', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4980.7245', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4482.9104', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3286.3581', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7891.8049', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9916.9117', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3230.2805', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6864.1344', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4017.5317', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6028.8451', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1530.5783', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1529.2217', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4035.713', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6406.2245', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1009.1589', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status212.9373', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8260.685', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3671.7776', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7279.8421', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3094.3924', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4712.4744', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6665.7355', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6128.382', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1549.4843', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5821.6728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status875.69', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3206.7866', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9405.9079', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7800.9726', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6127.0534', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6891.6797', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9411.9131', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1577.8066', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6960.8591', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8962.4437', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7250.6219', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6754.5541', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9879.3601', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6181.2233', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8647.9859', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8004.2292', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8068.3741', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1675.1402', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1065.6993', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9692.023', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2754.2346', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2094.08', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1179.0551', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8374.3569', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1855.5327', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9618.8063', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2343.4596', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3438.8347', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1243.1329', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9348.1153', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status869.1577', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6038.336', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7935.3666', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9440.3236', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6311.8789', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4935.3462', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7271.8743', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6987.4827', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6006.331', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7625.0377', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4978.6276', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8964.6725', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1610.2902', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9715.1064', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6351.4416', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7105.5746', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5469.0984', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status92.1357', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3468.8029', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status298.1832', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status443.6368', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9504.5199', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5097.3334', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2549.1682', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7695.9236', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8496.8003', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9064.6619', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9376.4195', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8199.4885', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6095.5287', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3413.9718', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8796.9653', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6667.9249', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2005.6313', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1884.9184', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5664.3158', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9060.0198', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9240.3533', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1753.6101', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1048.1269', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1059.398', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8930.6165', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5682.6818', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4513.5073', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6192.8916', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status626.4416', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1499.2123', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3783.0894', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5014.4404', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3550.3189', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5436.2106', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8924.9199', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7673.4027', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5086.4369', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1312.1891', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7504.8857', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3178.0832', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5027.5717', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6773.9711', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5147.5871', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7576.6149', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5729.1328', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3698.8754', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2925.1159', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6443.4983', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1274.4351', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2276.968', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status106.5443', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8167.962', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9098.9662', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4812.6363', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4766.018', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status142.961', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7432.403', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9650.3368', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6843.1155', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9261.8868', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8053.191', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4996.2592', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5394.5103', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4142.5462', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status505.9824', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1103.3878', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9169.973', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5705.7338', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3606.383', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4540.2672', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6171.1051', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3396.3675', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6479.1144', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8572.9307', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9899.011', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5363.2385', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3535.2735', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8130.8761', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7340.8002', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2752.5008', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2468.3502', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1484.9918', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4931.1565', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5299.2069', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5693.1926', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5110.0349', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6749.6688', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6839.0841', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status176.7878', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9627.8116', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3484.3595', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9464.0594', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2235.8331', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2608.7992', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status619.303', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4388.2856', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status923.4178', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6898.2101', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7821.5529', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5340.1617', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4654.228', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3588.0241', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8749.6113', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9982.3175', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7517.1878', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status236.555', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6238.9309', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7914.0917', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4362.659', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3784.8871', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3268.398', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status710.4443', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4164.5143', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2005.8524', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2032.6083', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8518.9628', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3886.7791', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8387.3656', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9294.758', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1532.7865', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1133.728', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4129.8431', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1230.59', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2385.9123', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3909.4517', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status7903.5115', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5772.8719', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3972.6899', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status858.5483', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9671.4552', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2906.9502', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1163.9587', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3641.9715', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2614.9811', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8022.8323', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2885.8537', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3952.4891', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2425.9571', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2321.7354', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8265.1855', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3129.11', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4214.4719', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3277.7269', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9088.8848', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4013.3302', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status6859.2014', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4899.4731', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3553.8825', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status478.43', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status2598.417', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1804.6174', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status9083.3672', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status8292.4844', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status1954.4624', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status3976.6174', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status4017.4715', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .when('/:status5542.9723', {
        controller: 'TodoCtrl',
        templateUrl: 'todomvc-index.html',
        resolve: {
          store: function (todoStorage) {
            // Get the correct module (API or localStorage).
            return todoStorage.then(function (module) {
              module.get(); // Fetch the todo records in the background.
              return module;
            });
          },
        },
      })
      .otherwise({
        redirectTo: '/',
      });
  });
