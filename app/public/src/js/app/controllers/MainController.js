app.controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.entry = {};
    $scope.entry.trip = "leisure";
    $scope.entry.answer = "";
    $scope.errors = {};

    $scope.formSubmit = function() {

        console.log($scope.entry);
        $('.server-error').hide();

        $http.post('/api/entry', $scope.entry).
        success(function(data) {
            if (data.success) {
                $location.path("/thanks");
            } else {
                console.log(data);
                var estring = "";

                for(var i = 0; i < data.errors.length; i++){
                  estring += data.errors[i].msg + ". ";
                }

                $('.server-error .validationerror').html(estring);
                $('.server-error').show();
            }
        }).
        error(function(data) {
            $scope.errors = data.errors;
        });
    }

    $scope.countOf = function(text) {

        if (text) {
            var spaces = text.split(" ");
            return spaces.length;
        } else {
            return 0;
        }
    };

    $scope.loadVideo = function(){

        var ww = 562;
        var wh = 316;

        if(window.innerWidth <= 500){
            w = window.innerWidth - 60;
            h = (wh/ww) * w;
        }else{
          w = ww
          h = wh;
        }

        var player = "<iframe width='"+w+"' height='"+h+"' src='https://www.youtube.com/embed/K2Ab6BPiAzQ?autoplay=1' frameborder='0' allowfullscreen></iframe>";

        $(".trailer").html(player);
    }

}]);
