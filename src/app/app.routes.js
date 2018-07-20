routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider
        .state('root', {
            url: '/',
            // abstract: true,
            template: '<ui-view></ui-view>',
            redirectTo: 'front'
        });
    $urlRouterProvider.otherwise('/');
}

