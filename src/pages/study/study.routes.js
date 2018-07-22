import StudyController from './study.controller'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('front.study', {
    url: '/study',
    template: require('./study.html'),
    controller: StudyController,
    controllerAs: 'vm'
  });
}