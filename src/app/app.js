import angular from 'angular'
import uirouter from '@uirouter/angularjs'

import config from './app.config'
import routes from './app.routes'

import shared from '../shared'

import front from '../pages/front'
import home from '../pages/home'
import dict from '../pages/dict'
import help from '../pages/help'
import intro from '../pages/intro'

bootstrapConfig.$inject = ['$compileProvider', '$locationProvider', '$httpProvider', '$logProvider'];

function bootstrapConfig($compileProvider, $locationProvider, $httpProvider, $logProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    }).hashPrefix('!');

    // $httpProvider.interceptors.push('authInterceptor');
}

function bootstrap() {
    console.log("Angular.bootstrap!");
    angular.bootstrap(document, ['minidi']);
}

stateControl.$inject = ['$rootScope', '$state'];

function stateControl($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
        if (toState.redirectTo) {
            event.preventDefault();
            $state.go(toState.redirectTo, toParams);
        }
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
        // console.log('$stateChangeError - fired when an error occurs during transition.');
        //console.log(arguments);
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
    });

    $rootScope.$on('$viewContentLoaded', function(event) {
        //console.log('$viewContentLoaded - fired after dom rendered', event);
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
        console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
        //console.log(unfoundState, fromState, fromParams);
        event.preventDefault();
        $state.go("root");
    });
}

window.ApplicationConfiguration = config;
// console.log(config);

angular.module(config.applicationModuleName, [uirouter,
        shared, front, home, dict, help, intro
    ])
    .config(bootstrapConfig)
    .run(stateControl)
    .config(routes);

// Then define the init function for starting up the application
angular.element(document).ready(bootstrap);