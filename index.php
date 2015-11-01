<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <title>Bag House</title>

        <!-- CSS  -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
        <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-route.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular-animate.min.js"></script>
 <script src='http://localhost:3000/socket.io/socket.io.js'></script>
    </head>
    <body ng-app="DemoGrabHouse">
<base href="">
  <nav style="background: #65bbb9">
    <div class="nav-wrapper">
        <a href="#/" class="brand-logo"><img style="    height: 64px;" src="images/logo.PNG"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Account</a></li>
        <li><a href="collapsible.html"> <i class="large material-icons">power_settings_new</i></a></li>
      </ul>
    </div>
  </nav>



        <div class="container">
            <div class="section">

                <!--   Icon Section   -->
                <div class="row">
                    <ng-view></ng-view>
                </div>

            </div>
        </div>




       


        <!--  Scripts-->
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" src="js/angular/app.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>
        <script> var socket = io.connect("http://localhost:3000");</script>

    </body>
</html>
