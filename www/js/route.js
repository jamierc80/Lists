app.config(function($routeProvider) { 
    $routeProvider
    .when("/", {
        templateUrl : "partials/menu.html",
        controller  : "menuCtrl"
    })
    .when("/list/:id", {
        templateUrl : "partials/list.html",
        controller  : "listCtrl"
    })
    .otherwise({
        templateUrl : "partials/menu.html",
        controller  : "menuCtrl"
    });  
});