//14:17 18.09.2016   fin

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController )   ;



LunchCheckController.$inject = ['$scope']  ;



function  LunchCheckController($scope) {
  var strEnjoy   =    "Enjoy!"
  var strFillBox =    "Please enter data first!"
  var strMuch    =    "Too much!"



    $scope.messBox     =    ""
    $scope.inputBox    =    ""



    $scope.readInput = function () {
      var arrInput = $scope.inputBox.split(',') ;
      var arrLen   = arrInput.length            ;


            for (var i = 0; i < arrInput.length; i++) {

                           if (  (arrInput[i]).trim()  == ""  ) {
                                                                  arrLen = arrLen - 1 ;
                           }
             };



              if (($scope.inputBox == "")||(arrLen==0))  {
                $scope.messBox  = strFillBox
              } else {
                             if (arrLen <= 3)  {
                                                   $scope.messBox =   strEnjoy  ;
                             } else {
                                                   $scope.messBox =    strMuch  ;
                             }
              };


     }


}



})();
