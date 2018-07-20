import HomeController from './home.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.home', {
    url: '/home',
    template: require('./home.html'),
    controller: HomeController
  });
}