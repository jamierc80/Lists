var app = angular.module("lists", ["ngRoute"])
.service('sharedValues', function() {
    
    return {
        get: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        set: function(key, val) {
            localStorage.setItem(key, JSON.stringify(val));
        }
    };
    
});