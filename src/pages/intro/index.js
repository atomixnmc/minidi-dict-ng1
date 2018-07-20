
import uirouter from '@uirouter/angularjs'

import routes from './intro.routes.js'
import IntroService from './intro.service.js'
import IntroPageComponent from './intro.page.component'

export default angular.module('intro', [uirouter, 'shared'])
  .config(routes)
  .component('intropage', IntroPageComponent)
  .service('IntroService', IntroService)
  .name