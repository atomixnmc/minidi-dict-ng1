class DiscussChatCtrl {
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
    template: require('./discuss.chat.component.html'),
    controller: DiscussChatCtrl,
    controllerAs: 'vm'
    // bindings: {
    //     wordData: '='
    // }
}