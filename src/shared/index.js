
import uirouter from '@uirouter/angularjs'

import WidgetListControlComponent from './components/list-control/widget.list-control.component'

import URLService from './services/url.service'

export default angular.module('shared', [uirouter])
  .service('URLService', URLService)
  .component('listControl', WidgetListControlComponent)
  .name