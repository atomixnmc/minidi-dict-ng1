import IntroController from './intro.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.intro', {
    url: '/intro',
    template: require('./intro.html'),
    controller: IntroController,
    controllerAs: 'vm'
  });
}