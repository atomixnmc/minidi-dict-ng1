
import uirouter from '@uirouter/angularjs'

import routes from './help.routes.js'
import HelpService from './help.service.js'
import HelpPageComponent from './help.page.component'
import css from './help.page.component.css'

export default angular.module('help', [uirouter, 'shared'])
  .config(routes)
  .component('helppage', HelpPageComponent)
  .service('HelpService', HelpService)
  .name