
// import uirouter from '@uirouter/angularjs'

import routes from './intro.routes.js'
import IntroService from './intro.service.js'
import IntroPageComponent from './intro.page.component'

export default angular.module('intro', ['ui.router', 'shared'])
  .config(routes)
  .component('introPage', IntroPageComponent)
  .service('IntroService', IntroService)
  .name