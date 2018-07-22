class DiscussDetailCtrl {
	constructor($scope, DiscussService) {
		this.$scope = $scope;
		this.DiscussService = DiscussService;

		this.start();
	}

	start(){
		this.DiscussService.getTopicList()
		.then(data => {
			this.topics = data;
		});
	}
}

module.exports = {
    template: require('./discuss.detail.component.html'),
    controller: DiscussDetailCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}