class StudyPageCtrl {
	constructor($scope) {
		this.$scope = $scope;
	}
}

module.exports = {
    template: require('./study.page.component.html'),
    controller: StudyPageCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}