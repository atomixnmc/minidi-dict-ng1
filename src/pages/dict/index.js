
import uirouter from '@uirouter/angularjs'

import routes from './dict.routes.js'
import DictService from './dict.service.js'
import DictPageComponent from './dict.page.component'

export default angular.module('dict', [uirouter, 'shared'])
  .config(routes)
  .component('dictpage', DictPageComponent)
  .service('DictService', DictService)
  .name