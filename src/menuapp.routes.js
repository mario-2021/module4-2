(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories/categories.template.html',
                controller: 'CategoriesController',
                controllerAs: 'ctrl',
                resolve: { 
                    categories: ['MenuDataService', 
                        function(MenuDataService) {
                            return MenuDataService.getAllCategories().then(
                                function(response) {
                                    return response.data;
                                }
                            );
                        }
                    ]
                }
            })

            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/items/items.template.html',
                controller: 'ItemsController',
                controllerAs: 'ctrl',
                resolve: { 
                    categoryItems: ['$stateParams', 'MenuDataService', 
                        function($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.category).then(
                                function(response) {
                                    return {
                                        category: response.data.category,
                                        items: response.data.menu_items
                                    };
                                }
                            );
                        }
                    ]
                }
            });
    }
})();
