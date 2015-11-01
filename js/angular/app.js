
 
var app = angular.module("DemoGrabHouse", ['ngRoute', 'ngAnimate']);

/*routes */
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider

                // route for the home page
                .when('/', {
                    templateUrl: "templates/home.html",
                    controller: 'mainCtrl'
                })
                   .when('/propertylist', {
                    templateUrl: "templates/propertylist.html",
                    controller: 'mainCtrl'
                })
                .when('/openhouselist', {
                    templateUrl: "templates/openhouselist.html",
                    controller: 'mainCtrl'
                })
                        .when('/openhouseDetail', {
                    templateUrl: "templates/openhousedetail.html",
                    controller: 'mainCtrl'
                })
                             .when('/propertylistdetail', {
                    templateUrl: "templates/propertylistdetail.html",
                    controller: 'mainCtrl'
                }
                )
        
                    .when('/makeopenhouse', {
                    templateUrl: "templates/makeopenhouse.html",
                    controller: 'mainCtrl'
                }
                )

              

                // default route
                .otherwise({
                    redirectTo: '/'
                });

    }]);
/*routes */

/*controllers */
app.controller("mainCtrl", ["$scope", function ($scope) {
        $scope.event_active=false;
        $scope.event_closed=false;
        $scope.dealcanbemade=true;
        $scope.disable_deal=function(){
            $scope.dealcanbemade=false;
        }
        $scope.$on('$viewContentLoaded', function(){
    //Here your view content is fully loaded !!
      jQuery('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
 });
  });
  $scope.request_list=[
      
  ];
  $scope.confirmedList=[];
  $scope.BidList=[
 
  ];
   socket.on('request_openh_seller', function(data){
       console.log($scope.request_list);
        $scope.$apply(function () {
          
       $scope.request_list.push({name:data.name});
       Materialize.toast(data.name +" has made a request to join your OPENHOUSE EVENT", 4000);
        // $scope.message = "Timeout called!";
        });
   });
              socket.on('place_bid_seller', function(data){
                  $scope.$apply(function () {
          
       $scope.BidList.push({id:data.id,bid_amount:data.amount});
       Materialize.toast($scope.confirmedList[data.id].name +" has made a bid of $"+data.amount, 4000);
        // $scope.message = "Timeout called!";
        });
              });
              
              socket.on('activate_event_seller', function(data){
                  console.log("vll");
                   Materialize.toast("OPEN HOUSE HAS BEGUN", 4000);
                  $scope.$apply(function () {
          
       $scope.event_active=true;
        // $scope.message = "Timeout called!";
        });
              });
                socket.on('pay_token_seller', function(data){
                  //console.log("vll");
                   Materialize.toast("Congratulations the Deal is Done", 4000);
                  $scope.$apply(function () {
          
              
                $scope.event_active=true;
                 $scope.event_closed=true;
                 $scope.dealcanbemade=false;
        // $scope.message = "Timeout called!";
        });
              });
              
                socket.on('deal_cancelled_seller', function(data){
                  //console.log("vll");
                   Materialize.toast("The Buyer have Cancelled his Bid", 4000);
                  $scope.$apply(function () {
          
                $scope.event_active=true;
                 $scope.event_closed=false;
                 $scope.dealcanbemade=true;
        // $scope.message = "Timeout called!";
        });
              });
              
  $scope.insertToConfirmedList=function(i){
      Materialize.toast($scope.request_list[i].name+" is confirmed successfully", 4000)
      $scope.confirmedList.push($scope.request_list[i]);
      $scope.request_list.splice(i, 1);
      
  }
  $scope.rejectRequest=function(i){
      Materialize.toast($scope.request_list[i].name+" has been rejected Successfully", 4000)
      $scope.request_list.splice(i, 1);
  }
$scope.propertyList=[
    {
        name:"3 Bhk Flat for rent",
        image:"images/home.jpg",
        desc:"description 1"
    }
    ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     }
]
$scope.openhouseList=[
    {
        name:"Property 1",
        image:"images/home.jpg",
        desc:"description 1"
    }
    ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } ,{
        name:"Property 2",
        image:"images/home.jpg",
         desc:"description 2"
     } 
]
$scope.goToProperty=function(){
    window.location="#/propertylist";
}
$scope.goToOpenHouse=function(){
    window.location="#/openhouselist";
}
$scope.goToOpenHouseDetail=function(){
    window.location="#/openhouseDetail";
}
$scope.gotopropertydetail=function(){
    window.location="#/propertylistdetail";

   
}
    }]);


