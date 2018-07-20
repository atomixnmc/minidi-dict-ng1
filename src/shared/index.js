
import uirouter from '@uirouter/angularjs'

import URLService from './services/url.service'

export default angular.module('shared', [uirouter])
  .service('URLService', URLService)
  .name