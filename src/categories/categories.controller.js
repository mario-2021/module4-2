(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        console.log('categories:', categories);
        var ctrl = this;

        ctrl.categories = categories;
    }
})();
