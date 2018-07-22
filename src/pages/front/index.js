
import bootstrap from 'bootstrap'

// import uirouter from '@uirouter/angularjs'

import routes from './front.routes.js'
import HeaderComponent from './header.component'
import FooterComponent from './footer.component'

export default angular.module('front', ['angular-loading-bar', 'ngAnimate', 'ui.router', 'shared'])
  .config(routes)
  .component('headerUi', HeaderComponent)
  .component('footerUi', FooterComponent)
  .name