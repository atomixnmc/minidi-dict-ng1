import DictController from './dict.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.dict', {
    url: '/dict',
    template: require('./dict.html'),
    controller: DictController
  });
}