class HelpPageCtrl {
	constructor($scope) {
		this.$scope = $scope;
	}
}

module.exports = {
    template: require('./help.page.component.html'),
    controller: HelpPageCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}