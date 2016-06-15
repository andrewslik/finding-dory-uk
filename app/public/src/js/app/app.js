$(document).ready(function() {
    var taburl = "https://www.facebook.com/Qantas/app/1004723306309339";
    var md = new MobileDetect(window.navigator.userAgent);
    var url = (window.location != window.parent.location) ? document.referrer : document.location;

    if (url.hostname) {
        if (url.hostname.indexOf('qantas-findingdory-comp') > -1) {
            if (md.phone() || md.tablet()) {

            }else{
              window.parent.location = taburl;
              return;
            }
        }
    }
    if (md.phone() || md.tablet()) {
        $('video').hide();
        $('.background-video-bottom').hide();
    }

    setInterval(function() {
        $('.fish').width($('.facebook-app-inner').width());
        $('.fish').height($('.facebook-app').height());
        console.log('height adjust');
    }, 500);

});

var app = angular.module('app', ['ngRoute', 'appControllers', 'angular-loading-bar']);

var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainController'
    }).
    when('/thanks', {
        templateUrl: 'views/thanks.html',
        controller: 'MainController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);
