import DiscussController from './discuss.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.discuss', {
    url: '/discuss',
    template: require('./discuss.html'),
    controller: DiscussController,
    controllerAs: 'vm'
  });
}