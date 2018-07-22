
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import css from '../../style/theme.bootstrap.min.css';

import uirouter from '@uirouter/angularjs'

import routes from './front.routes.js'
import HeaderComponent from './header.component'
import FooterComponent from './footer.component'

export default angular.module('front', [uirouter, 'shared'])
  .config(routes)
  .component('headerUi', HeaderComponent)
  .component('footerUi', FooterComponent)
  .name