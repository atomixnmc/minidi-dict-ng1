
import routes from './discuss.routes.js'
import DiscussService from './discuss.service.js'
import DiscussPageComponent from './discuss.page.component'
import DiscussListComponent from './discuss.list.component'
import DiscussDetailComponent from './discuss.detail.component'
import DiscussChatComponent from './discuss.chat.component'
import css from './discuss.page.component.css'

export default angular.module('discuss', ['ui.router', 'shared', 'ui.bootstrap'])
  .config(routes)
  .service('DiscussService', DiscussService)
  .component('discussPage', DiscussPageComponent)
  .component('discussList', DiscussListComponent)
  .component('discussDetail', DiscussDetailComponent)
  .component('discussChat', DiscussChatComponent)
  .name