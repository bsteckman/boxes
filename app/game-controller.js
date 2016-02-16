app.controller('GameController', function ($scope) {
    var maxBounds = 96;
    var minBounds = 0;
    var moveSpeedMod = 3;
    var moveSpeed = 1;

    $scope.x = 0;
    $scope.y = 0;
    
    $scope.move = function(e){
        if(e.keyCode == 39){
            $scope.moveRight();
        } else if (e.keyCode == 40) {
            $scope.moveDown();
        } else if (e.keyCode == 38) {
            $scope.moveUp();
        } else if (e.keyCode == 37) {
            $scope.moveLeft();
        }
    }

    $scope.moveUp = function () {
        if ($scope.y > minBounds) {
            $scope.y -= moveSpeed * moveSpeedMod;
        }
    }
    $scope.moveDown = function () {
        if ($scope.y < maxBounds) {
            $scope.y += moveSpeed * moveSpeedMod;
        }
    }
    $scope.moveLeft = function () {
        if ($scope.x > minBounds) {
            $scope.x -= moveSpeed * moveSpeedMod;
        }
    }
    $scope.moveRight = function () {
        if ($scope.x < maxBounds) {
            $scope.x += moveSpeed * moveSpeedMod
        }
    }
    
})