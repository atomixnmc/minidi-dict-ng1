function HomePageCtrl(){
	
}
module.exports = {
  template: require('./home.page.component.html'),
  controller: HomePageCtrl,
  bindings: {
    stats: '='
  }
}