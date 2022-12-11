(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['categoryItems'];
    function ItemsController(categoryItems) {
        console.log('categoryItems:', categoryItems);
        var ctrl = this;

        ctrl.category = categoryItems.category;
        ctrl.items = categoryItems.items;
    }
})();
