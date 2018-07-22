import { WOW }  from 'wowjs';

function HomePageCtrl($timeout){
	
    $timeout(function() {
        new WOW().init();
    }, 1000);
}
module.exports = {
  template: require('./home.page.component.html'),
  controller: HomePageCtrl,
  bindings: {
    stats: '='
  }
}