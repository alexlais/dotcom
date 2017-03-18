

(function(angular) {
    'use strict';

    angular.module('ngRouteExample', ['ngRoute', 'ngSanitize'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    // First level
    // .controller('MainCtrl', ['$scope', '$route', '$location', function($scope, $route, $location) {

    .controller('firstCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

        // items
        $scope.items = {
            item1: {
                name: 'Brazil Nuts',
                description: 'Edible nut from Amazon region',
                address: '123 4th Street'
            },
            item2: {
                name: 'Wallnuts',
                description: 'The best nut',
                address: '234 Walnut Street'
            }
        };

        // alexlais.com CONTENT
        $scope.siteInfo = {
            name: 'portfolio'
        };

        // KEYWORDS
        // lunch special hamburgers pizza salads sushi american italian pasta mexican
        // mediterranean turkish greek asian chineese thai indian japanese soups subs
        // seafood grill diner breakfast deli bagels coffee tea smoothies juices dessert
        // healthy vegetarian vegan gluten free
        $scope.keywords = 'AngularJS,HTML5,CSS3,Bootstrap 4,HTML5 MODE,HTML5 Storage,GitHub hosted,Boottrap 3';

        $scope.food = [
        {
            name:'7DayEat.com',
            url: 'http://7DayEat.com',
            employer: 'Freelance Project',
            description: 'Food delivery service. Currently with placeholder content',
            image1: '7DayEat1.jpg',
            image2: '7DayEat2.jpg',
            technologies: [
                'AngularJS', 'No jQuery', 'Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript', 
                'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '',
                cityState: 'New York, NY'},
            duration: { 
                applicable: "notApply",
                date: "2017"}
        },
        {
            name: 'LEX International Law Firm',
            url: 'https://alexlais.github.io/LEX/',
            employer: 'Freelance Project',
            description: [
                'Website design and development for an international law firm',
                'AngularJS 1.6 Single Page Application (Ng-route, ng-repeat, ng-include and own directives)',
                'Github Hosting using HTML5Mode',
                'CSS3, HTML5, Bootstrap 3, Google Maps'],
            image1: 'lex.jpg',
            image2: 'lex.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'HTML5 Storage', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '',
                cityState: 'Miami, Fl'},
            duration: { 
                applicable: "notApply",
                date: "2017"}
        },
        {
            name: 'Gurian Law',
            url: 'https//GurianLaw.com',
            employer: 'Freelance Project',
            description: 'Is a South Florida law firm specialized in a wide range of investment issues and property protection matters',
            image1: 'GurianLaw.jpg',
            image2: 'GurianLaw.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'HTML5 Storage', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop', 'SEO', 'Microdata Schema.org'],
            address: {
                street: '',
                cityState: 'Miami, Fl'},
            duration: { 
                applicable: "notApply",
                date: "2016"}
        },
        {
            name: 'Medscape.com',
            url: 'http://Medscape.com',
            employer: 'WebMD',
            description: [
                '<em>Medscape.com<\/em> is the top medical resource and reference for physicians today',
                'Development of informational and advertisement microsites and popups featured on <em>Medscape.com<\/em> mobile and desktop versions',
                'Constantly working with designers to arrange requirements for mobile versions of table contents and other issues that can occur with sensitive content in a narrow layout',
                'Working with editors making meticulous content changes and updates',
                'Creating and testing a template to be used for all future projects and improve development time and QA'],
            image1: 'webmd.png',
            image2: 'webmd.png',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name: 'Daytrana',
            url: 'http://Daytrana.com',
            employer: 'Evoke Health',
            description: '',
            image1: 'daytrana.png',
            image2: 'daytrana.png',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name: 'Botox Medical',
            url: 'http://BotoxMedical.com',
            employer: 'Evoke Health',
            description: 'Code base refactoring',
            image1: 'botox.png',
            image2: 'botox.png',
            technologies: ['jQuery', 'jQuery Mobile', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name: 'McKinsey & Company',
            url: 'http://www.mckinsey.com/',
            employer: 'McKinsey & Company',
            description: 'Refactoring of entire domain code base',
            image1: 'mckinsey1.png',
            image2: 'mckinsey2.png',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'Sitebrew ',
            url: 'http://www.mckinsey.com/',
            employer: 'McKinsey & Company',
            description: [
                'TMP Worldwide is the largest independent firm with focus on recruitment advertising and communications. At TMP I worked with an integrated product suite called <a target="_blank" href="https://www.tmp.com/talentbrew/">TalentBrew</a>, a platform that has effectively positioned TMP as pioneers where recruitment strategies and digital media converge.'
                ],
            image1: 'Mike_Burger.jpg',
            image2: 'Mike_Burger.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'SciMed',
            description: '',
            image1: 'BreatheX1.jpg',
            image2: 'BreatheX2.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'Ruder Finn',
            description: '',
            image1: 'Julie_Deli.jpg',
            image2: 'Julie_Deli.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'NBC Network',
            image1: 'bravo1.jpg',
            image2: 'bravo2.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'StylishWindows.com',
            image1: 'Juliette_Breakfast.jpg',
            image2: 'Juliette_Breakfast.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        },
        {
            name:'Terry Lyons',
            employer: 'Freelance Project',
            description: 'Food delivery service. Currently with placeholder content',

            name:'TerryLyons.com',
            image1: 'Juliette_Breakfast.jpg',
            image2: 'Juliette_Breakfast.jpg',
            technologies: ['jQuery', 'jQuery Mobile', 'Bootstrap 3', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Media Queries', 'Photoshop'],
            address: {
                street: '825 8th Ave',
                cityState: 'New York, NY'},            
            duration: {
                from: 'April 2014',
                to: 'April 2015',
                date: 'notApply'}
        }];

        // TODAY
        $scope.CurrentDate = new Date();

        $scope.params = $routeParams;
        $scope.currentItem = $routeParams.itemID;
    }])

        // URL Related Classes

        // $scope.mainClass = function () {
        //      var active = $route.current.templateUrl;
        //      return active;
        // };

        // NAV HIGHLIGHT

        // $scope.isActive = function (viewLocation) {
        //      var active = (viewLocation === $location.path());
        //      return active;
        // };

        // ------------------------------------------------------

        // var currentItemVar = $scope.currentItem;
        // alert (currentItemVar);


        // $scope.test = $routeParams.test;
        // console.log(currentItem);

        // $scope.slug = $routeParams.slug;


        // var log = [];
        // angular.forEach(values, function(value, key) {
        //   this.push(key + ': ' + value);
        // }, log);


    // DIRECTIVES
    .directive('myDirective', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.promoHeight = element.prop('offsetHeight');
                console.log($scope.promoHeight);
            }
        };
    })
    // .directive('weekDayDirective', function($timeout) {
    //     return {
    //         restrict: 'A',
    //         link: console.log("weekDay");
    //             var d = new Date();
    //             var n = d.getDay();
    //                 // if (x == 0){
    //                 //    return "mark";
    //                 // }
    //     };
    // })



    // SECOND LEVEL
    .controller('secondCtrl', function($scope, $routeParams) {
        $scope.params = $routeParams;
    })

    // RUN ROOT
    .run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            // window.scrollTo(0, 0);
            // $rootScope.title = current.$$route.title;
            // $rootScope.teamTitle = current.$$route.action;
            // $rootScope.description = current.$$route.description.currentProfile;
            // $rootScope.keywords = current.$$route.keywords;
            // $rootScope.canonical = current.$$route.canonical;
            // $rootScope.robots = current.$$route.robots;
        });
    }])

    // ROUTER CONFIG
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'firstCtrl'
        })
        .when('/home/:itemID', {
            templateUrl: 'home.html',
            controller: 'firstCtrl',
        })
        .when('/menu/:itemID', {
            templateUrl: 'menu.html',
            controller: 'firstCtrl',
            resolve: {
                // delay: function($q, $timeout) {
                //     var delay = $q.defer();
                //     $timeout(delay.resolve, 100);
                //     return delay.promise;
                // }
            }
        })
        .when('/itemsPage/:itemID/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: 'secondCtrl'
        });

        $locationProvider.html5Mode(true).hashPrefix('!');
    });
})(window.angular);




/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license

Original code source: https://docs.angularjs.org/api/ngRoute/service/$route
hashPrefix added
*/















