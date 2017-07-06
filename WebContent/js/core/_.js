﻿(function () {
    'use strict';
    var module = angular.module('app.services')
    .factory('_', ['$window', function ($window) {
        // Get a local handle on the global lodash reference.
        var _ = $window._;
        // OPTIONAL: Sometimes I like to delete the global reference to make sure
        // that no one on the team gets lazy and tried to reference the library
        // without injecting it. It's an easy mistake to make, and one that won't
        // throw an error (since the core library is globally accessible).
        // ALSO: See .run() block above.
        delete ($window._);
        // ---
        // CUSTOM LODASH METHODS.
        // ---
        // I return the given collection as a natural language list.
        _.naturalList = function (collection) {
            if (collection.length > 2) {
                var head = collection.slice(0, -1);
                var tail = collection[collection.length - 1];
                return (head.join(", ") + ", and " + tail);
            }
            if (collection.length === 2) {
                return (collection.join(" and "));
            }
            if (collection.length) {
                return (collection[0]);
            }
            return ("");
        };
        // Return the [formerly global] reference so that it can be injected
        // into other aspects of the AngularJS application.
        return (_);
    }]);
})();