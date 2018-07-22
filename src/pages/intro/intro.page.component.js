class IntroPageCtrl {
	constructor($scope, IntroService) {
		this.IntroService = IntroService;
		this.$scope = $scope;
	}

	start() {
	}
}

module.exports = {
    template: require('./intro.page.component.html'),
    controller: IntroPageCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}