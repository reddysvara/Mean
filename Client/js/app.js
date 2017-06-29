var movieApp=angular.module('movieApp',['ui.router']);
movieApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
$urlRouterProvider.otherwise('movies');
$stateProvider.state('movies',{
    url : '/movies',
    templateUrl :'/views/movies.html'
});

});