(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'baseUrl'];
  function MenuDataService($http, baseUrl) {
      var service = this;

      service.getAllCategories = function() {
          return $http({
              method: 'GET',
              url: baseUrl + 'categories.json'
          });
      };

      service.getItemsForCategory = function(categoryShortName) {
          console.log('categoryShortName:', categoryShortName);
          return $http({
              method: 'GET',
              url: baseUrl + 'menu_items.json?category=' + categoryShortName
          });
      };
  }
})();
