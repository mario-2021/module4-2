(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/categories/categories.component.template.html',
            bindings: {
                list: '<'
            }
        });
})();