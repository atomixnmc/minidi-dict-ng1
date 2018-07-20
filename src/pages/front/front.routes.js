routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('front', {
            url: '/front',
            // abstract: true,
            template: require('./front.html'),
            redirectTo: 'front.home'
        });
}

