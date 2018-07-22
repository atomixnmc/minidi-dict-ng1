
// import uirouter from '@uirouter/angularjs'

import routes from './home.routes.js'
import HomeService from './home.service.js'
import HomePageComponent from './home.page.component'
import css from './home.page.component.css'

export default angular.module('minidi.home', ['ui.router'])
  .config(routes)
  .component('homePage', HomePageComponent)
  .service('HomeService', HomeService)
  .name