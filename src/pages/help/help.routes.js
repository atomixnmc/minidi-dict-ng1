import HelpController from './help.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.help', {
    url: '/help',
    template: require('./help.html'),
    controller: HelpController,
    controllerAs: 'vm'
  });
}