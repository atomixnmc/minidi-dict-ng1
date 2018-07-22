
import uirouter from '@uirouter/angularjs'

import routes from './study.routes.js'
import StudyService from './study.service.js'
import StudyPageComponent from './study.page.component'
import css from './study.page.component.css'

export default angular.module('study', [uirouter, 'shared'])
  .config(routes)
  .component('studyPage', StudyPageComponent)
  .service('StudyService', StudyService)
  .name